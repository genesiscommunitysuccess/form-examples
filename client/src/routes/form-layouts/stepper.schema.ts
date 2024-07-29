export const uiSchemaStepper = {
  type: 'Stepper',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/person',
      label: 'Personal',
      options: {
        childElements: [
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/person/properties/firstName',
              },
              {
                type: 'Control',
                scope: '#/properties/person/properties/secondName',
              },
            ],
          },
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/person/properties/birthDate',
              },
              {
                type: 'Control',
                scope: '#/properties/person/properties/nationality',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'Control',
      label: 'Address',
      scope: '#/properties/address',
      options: {
        childElements: [
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/address/properties/street',
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/streetNumber',
              },
            ],
          },
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/address/properties/city',
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/postalCode',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'Control',
      label: 'Account Details',
      scope: '#/properties/accountDetails',
      options: {
        childElements: [
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/accountDetails/properties/accountType',
              },
              {
                type: 'Control',
                scope: '#/properties/accountDetails/properties/otherAccountType',
              },
              {
                type: 'Control',
                scope: '#/properties/accountDetails/properties/accountNumber',
              },
              {
                type: 'Control',
                scope: '#/properties/accountDetails/properties/sortCode',
              },
            ],
          },
        ],
      },
    },
  ],
};

export const jsonSchemaStepper = {
  type: 'object',
  properties: {
    person: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          minLength: 3,
          description: 'Please enter your first name',
        },
        secondName: {
          type: 'string',
          minLength: 3,
          description: 'Please enter your second name',
        },
        birthDate: {
          type: 'string',
          format: 'date',
          description: 'Please enter your birth date.',
        },
        nationality: {
          type: 'string',
          description: 'Please enter your nationality.',
        },
      },
      required: ['firstName', 'secondName'],
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string',
        },
        streetNumber: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        postalCode: {
          type: 'string',
          maxLength: 5,
        },
      },
      required: ['postalCode'],
    },
    accountDetails: {
      type: 'object',
      properties: {
        accountType: {
          type: 'string',
          enum: ['Current', 'Savings', 'Credit', 'Joint', 'Other'],
        },
        accountNumber: {
          type: 'number',
        },
        sortCode: {
          type: 'number'
        },
        otherAccountType: {
          type: 'string',
        },
      },
      required: [],
    },
  },
};
