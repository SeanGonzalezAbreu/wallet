import React from 'react'

import BasicDialog from './BasicDialog'
import ShockInput from './ShockInput'
import Pad from './Pad'
import ShockButton from './ShockButton'

/**
 * @typedef {object} Props
 * @prop {string} recipientPublicKey
 * @prop {(amt: number, memo: string) => void} onPressSend
 */

/**
 * @typedef {object} State
 * @prop {number} amount
 * @prop {string} memo
 * @prop {'input'|'closed'} state
 */

/**
 * @augments React.PureComponent<Props, State>
 */
export default class PaymentDialog extends React.PureComponent {
  /** @type {State} */
  state = {
    amount: 0,
    memo: '',
    state: 'closed',
  }

  //////////////////////////////////////////////////////////////////////////////

  open = () => {
    this.setState({
      state: 'input',
    })
  }

  close = () => {
    this.setState({
      amount: 0,
      memo: '',
      state: 'closed',
    })
  }

  onRequestClose = () => {
    this.close()
  }

  onPressSend = () => {
    this.props.onPressSend(this.state.amount, this.state.memo)
    this.close()
  }

  //////////////////////////////////////////////////////////////////////////////

  /**
   * @type {import('./ShockInput').Props['onChangeText']}
   */
  onChangeAmount = amount => {
    const numbers = '0123456789'.split('')

    const chars = amount.split('')

    if (!chars.every(c => numbers.includes(c))) {
      return
    }

    this.setState({
      amount: Number(amount),
    })
  }

  /**
   * @type {import('./ShockInput').Props['onChangeText']}
   */
  onChangeMemo = memo => {
    this.setState({
      memo,
    })
  }

  //////////////////////////////////////////////////////////////////////////////

  render() {
    const { amount, memo, state } = this.state

    return (
      <BasicDialog
        title="Send Money"
        onRequestClose={this.onRequestClose}
        visible={state !== 'closed'}
      >
        {(() => {
          switch (state) {
            default:
            case 'closed':
              return null
            case 'input':
              return (
                <>
                  <ShockInput
                    placeholder="Memo (optional)"
                    onChangeText={this.onChangeMemo}
                    value={memo}
                  />

                  <Pad amount={10} />

                  <ShockInput
                    keyboardType="number-pad"
                    onChangeText={this.onChangeAmount}
                    placeholder="Amount (in sats)"
                    value={
                      amount === 0
                        ? undefined // allow placeholder to show
                        : amount.toString()
                    }
                  />
                </>
              )
          }
        })()}

        <Pad amount={10} />
        <ShockButton onPress={this.onPressSend} title="Send" />
      </BasicDialog>
    )
  }
}
