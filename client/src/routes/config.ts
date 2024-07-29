import { Auth, Session } from '@genesislcap/foundation-comms';
import { defaultLoginConfig, LoginConfig } from '@genesislcap/foundation-login';
import { FoundationRouterConfiguration } from '@genesislcap/foundation-ui';
import { NavigationPhase, optional, Route } from '@genesislcap/web-core';
import { defaultLayout, loginLayout } from '../layouts';
import { logger } from '../utils';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { defaultNotPermittedRoute, NotPermitted } from './not-permitted/not-permitted';
import { LoginSettings } from './types';
import { FormsWithRules } from './forms-with-rules/forms-with-rules';
import { FormsWithCustomRenderers } from './forms-with-custom-renderers/forms-with-custom-renderers';
import { FormsJsonSchema } from './forms-json-schema/forms-json-schema';
import { FormControls } from './form-controls/form-controls';
import { FormLayouts } from './form-layouts/form-layouts';
import { FormsValidation } from './forms-validation/forms-validation';
import { FormsIntroduction } from './forms-introduction/forms-introduction';

// eslint-disable-next-line
declare var ENABLE_SSO: string;

const ssoSettings =
  typeof ENABLE_SSO !== 'undefined' && ENABLE_SSO === 'true'
    ? {
        autoAuth: true,
        sso: {
          toggled: true,
          identityProvidersPath: 'sso/list',
        },
      }
    : {};

export class MainRouterConfig extends FoundationRouterConfiguration<LoginSettings> {
  constructor(
    @Auth private auth: Auth,
    @Session private session: Session,
    @optional(LoginConfig)
    private loginConfig: LoginConfig = { ...defaultLoginConfig, autoAuth: true, autoConnect: true },
  ) {
    super();
  }

  async configure() {
    this.configureAnalytics();
    this.title = 'Smart Forms Examples';
    this.defaultLayout = defaultLayout;

    const authPath = 'login';

    this.routes.map(
      { path: '', redirect: authPath },
      {
        path: authPath,
        name: 'login',
        title: 'Login',
        element: async () => {
          const { configure, define } = await import(
            /* webpackChunkName: "foundation-login" */
            '@genesislcap/foundation-login'
          );
          configure(this.container, {
            hostPath: 'login',
            autoConnect: true,
            defaultRedirectUrl: 'home',
            ...ssoSettings,
          });
          return define({
            name: `formexamples-root-login`,
            /**
             * You can augment the template and styles here when needed.
             */
          });
        },
        layout: loginLayout,
        settings: { public: true },
        childRouters: true,
      },
      { path: 'not-found', element: NotFound, title: 'Not Found', name: 'not-found' },
      {
        path: defaultNotPermittedRoute,
        element: NotPermitted,
        title: 'Not Permitted',
        name: defaultNotPermittedRoute,
      },
      {
        path: 'home',
        element: Home,
        title: 'Home',
        name: 'home',
        navItems: [
          {
            title: 'Home',
          },
        ],
      },
      {
        path: 'forms-introduction',
        element: FormsIntroduction,
        title: 'Introduction',
        name: 'forms-introduction',
        navItems: [
          {
            title: 'Introduction',
          },
        ]
      },
      {
        path: 'forms-json-ui-schema',
        element: FormsJsonSchema,
        title: 'JSON/UI Schema',
        name: 'forms-json-schema',
        navItems: [
          {
            title: 'JSON/UI Schema',
          },
        ],
      },
      {
        path: 'form-layouts',
        element: FormLayouts,
        title: 'Layouts',
        name: 'form-layouts',
        navItems: [
          {
            title: 'Layouts',
          },
        ],
      },
      {
        path: 'form-controls',
        element: FormControls,
        title: 'Input Controls',
        name: 'form-controls',
        navItems: [
          {
            title: 'Input Controls',
          },
        ],
      },
      {
        path: 'forms-with-rules',
        element: FormsWithRules,
        title: 'Rules',
        name: 'forms-with-rules',
        navItems: [
          {
            title: 'Rules',
          },
        ],
      },

      {
        path: 'forms-validation',
        element: FormsValidation,
        title: 'Validation',
        name: 'forms-validation',
        navItems: [
          {
            title: 'Validation',
          },
        ],
      },
      {
        path: 'forms-with-custom-renderers',
        element: FormsWithCustomRenderers,
        title: 'Custom Controls',
        name: 'forms-with-custom-renderers',
        navItems: [
          {
            title: 'Custom Controls',
          },
        ],
      },
    );

    /**
     * Example of a FallbackRouteDefinition
     */
    this.routes.fallback(() =>
      this.auth.isLoggedIn ? { redirect: 'not-found' } : { redirect: authPath },
    );

    /**
     * Example of a NavigationContributor
     */
    this.contributors.push({
      navigate: async (phase) => {
        const settings = phase.route.settings;

        /**
         * If public route don't block
         */
        if (settings && settings.public) {
          return;
        }

        /**
         * If logged in don't block
         */
        if (this.auth.isLoggedIn) {
          this.redirectIfNotPermitted(settings, phase);
          return;
        }

        /**
         * If allowAutoAuth and session is valid try to connect+auto-login
         */
        if (this.loginConfig.autoAuth && (await this.reAuthFromSession(settings, phase))) {
          return;
        }

        /**
         * Otherwise route them somewhere, like to a login
         */
        phase.cancel(() => {
          this.session.captureReturnUrl();
          Route.name.replace(phase.router, authPath);
        });
      },
    });
  }

  private async reAuthFromSession(settings: LoginSettings, phase: NavigationPhase) {
    return this.auth.reAuthFromSession().then((authenticated) => {
      logger.info(`reAuthFromSession. authenticated: ${authenticated}`);
      if (authenticated) {
        this.redirectIfNotPermitted(settings, phase);
      }
      return authenticated;
    });
  }

  private redirectIfNotPermitted(settings: LoginSettings, phase: NavigationPhase) {
    const { path } = phase.route.endpoint;
    if (settings?.isPermitted && !settings.isPermitted()) {
      logger.warn(`Not permitted - Redirecting URL from ${path} to ${defaultNotPermittedRoute}.`);
      phase.cancel(() => {
        Route.name.replace(phase.router, defaultNotPermittedRoute);
      });
    }
  }
}
