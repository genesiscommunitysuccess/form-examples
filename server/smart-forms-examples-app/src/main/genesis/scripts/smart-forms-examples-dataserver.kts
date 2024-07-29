package scripts

/**
 *
 *   System              : smart-forms-examples
 *   Sub-System          : smart-forms-examples Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Data Server Configuration for smart-forms-examples.
 *
 *   Modification History
 *
 */

dataServer {
    query("ALL_SIMPLE_TRADES", SIMPLE_TRADE)
    query("ALL_SIMPLE_TRADES_WITH_ENUM", SIMPLE_TRADE_WITH_ENUM)
    query("ALL_TRADES", TRADE)
    query("ALL_COUNTERPARTIES", COUNTERPARTY)
}
