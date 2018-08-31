import { AsyncStorage } from 'react-native'
import Observable from 'obv'
import config from '../config'

export const scaleObservable = Observable()
setObvWithInitValue('tempScale', scaleObservable, {
  min: config.temperatureScale.defaultLow,
  max: config.temperatureScale.defaultHigh
})

export const tempReminderObservable = Observable()
setObvWithInitValue('tempReminder', tempReminderObservable, {
  enabled: false
})

async function setObvWithInitValue(key, obv, defaultValue) {
  const result = await AsyncStorage.getItem(key)
  let value
  if (result) {
    value = JSON.parse(result)
  } else {
    value = defaultValue
  }
  obv.set(value)
}

export async function saveTempScale(scale) {
  await AsyncStorage.setItem('tempScale', JSON.stringify(scale))
  scaleObservable.set(scale)
}

export async function saveTempReminder(reminder) {
  await AsyncStorage.setItem('tempReminder', JSON.stringify(reminder))
  tempReminderObservable.set(reminder)
}