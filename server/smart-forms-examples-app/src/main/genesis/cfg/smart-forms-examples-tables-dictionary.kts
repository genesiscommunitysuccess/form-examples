/**
 * This file defines the entities (or tables) for the application.
 * Entities aggregation a selection of the universe of fields defined in
 * {app-name}-fields-dictionary.kts file into a business entity.
 *
 * Note: indices defined here control the APIs available to the developer.
 * For example, if an entity requires lookup APIs by one or more of its attributes,
 * be sure to define either a unique or non-unique index.

 * Full documentation on tables may be found here >> https://learn.genesis.global/docs/database/fields-tables-views/tables/

 */

tables {

    table(name = "SIMPLE_TRADE", id = 10_000) {
        field("SIMPLE_TRADE_ID", STRING).sequence("ST")
        field("QUANTITY", DOUBLE)
        field("SIDE", STRING)
        primaryKey("SIMPLE_TRADE_ID")
    }

    table(name = "SIMPLE_TRADE_WITH_ENUM", id = 10_001) {
        field("ENUM_TRADE_ID", STRING).sequence("ET")
        field("QUANTITY", DOUBLE)
        field("SIDE", ENUM("BUY", "SELL")).default("BUY")
        primaryKey("ENUM_TRADE_ID")
    }

    table(name = "TRADE", id = 11_000) {
        field("TRADE_ID", STRING).sequence("TR")
        field("COUNTERPARTY_ID", INT).notNull()
        field("NOTES", STRING)
        field("PRICE", DOUBLE).notNull()
        field("QUANTITY", STRING).notNull()
        field("SIDE", ENUM("SELL","BUY")).default("BUY").notNull()
        primaryKey("TRADE_ID")
    }

    table(name = "COUNTERPARTY", id = 11_001) {
        field("COUNTERPARTY_ID", INT).notNull()
        field("ENABLED", BOOLEAN).default(false).notNull()
        field("MAIN_CONTACT", STRING).notNull()
        field("NAME", STRING).notNull()
        primaryKey("COUNTERPARTY_ID")
    }
}
