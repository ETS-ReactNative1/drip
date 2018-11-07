import { Alert } from 'react-native'
import { openDb } from '../../../db'
import { shared } from '../../labels'

export default async function checkPassword({hash, onCancel, onTryAgain }) {
  const connected = await openDb(hash)
  if (connected) return true
  Alert.alert(
    shared.incorrectPassword,
    shared.incorrectPasswordMessage,
    [{
      text: shared.cancel,
      onPress: onCancel
    }, {
      text: shared.tryAgain,
      onPress: onTryAgain
    }]
  )
  return false
}