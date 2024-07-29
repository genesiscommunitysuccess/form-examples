package scripts

/**
 *
 *   System              : smart-forms-examples
 *   Sub-System          : smart-forms-examples Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Event Handler configuration for smart-forms-examples.
 *
 *   Modification History
 *
 */

eventHandler {

    eventHandler<SimpleTrade>("SIMPLE_TRADE_INSERT", transactional = true) {
        onCommit { event ->
            val details = event.details
            entityDb.insert(details)
            ack()
        }
    }

    eventHandler<Trade>("TRADE_INSERT", transactional = true) {
        onCommit { event ->
            val details = event.details
            entityDb.insert(details)
            ack()
        }
    }

    eventHandler<Trade>("TRADE_MODIFY", transactional = true) {
        onCommit { event ->
            val details = event.details
            entityDb.modify(details)
            ack()
        }
    }

    eventHandler<Counterparty>("COUNTERPARTY_INSERT", transactional = true) {
        onCommit { event ->
            val details = event.details
            entityDb.insert(details)
            ack()
        }
    }

    eventHandler<Counterparty>("COUNTERPARTY_MODIFY", transactional = true) {
        onCommit { event ->
            val details = event.details
            entityDb.modify(details)
            ack()
        }
    }
}
