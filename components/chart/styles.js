import config from './config'

const styles = {
  curve: {
    borderStyle: 'solid',
    borderColor: '#ffc425',
    borderWidth: 2,
  },
  curveExcluded: {
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  curveDots: {
    backgroundColor: '#00aedb',
    width: 12,
    height: 12,
    borderRadius: 50
  },
  curveDotsExcluded: {
    backgroundColor: 'lightgrey',
    width: 12,
    height: 12,
    borderRadius: 50
  },
  column: {
    label: {
      date: {
        color: 'grey',
        fontSize: 9,
        fontWeight: '100'
      },
      number: {
        color: '#00b159',
        fontSize: 13,
        textAlign: 'center'
      }
    },
    rect: {
      width: config.columnWidth,
      height: config.chartHeight,
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: 0.5
    }
  },
  bleedingIcon: {
    fill: '#fb2e01',
    scale: 0.6,
    x: 6,
    y: 3
  },
  mucusIcon: {
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  mucusIconShades: [
    '#cc99cc',
    '#bf7fbf',
    '#b266b2',
    '#a64ca6',
    '#993299'
  ],
  yAxis: {
    height: config.chartHeight,
    width: config.columnWidth,
    borderRightWidth: 0.5,
    borderColor: 'lightgrey',
    borderStyle: 'solid'
  },
  yAxisLabel: {
    position: 'absolute',
    left: 3,
    color: 'grey',
    fontSize: 11,
    textAlign: 'left'
  },
  horizontalGrid: {
    position:'absolute',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    width: '100%',
    borderStyle: 'solid',
    left: config.columnWidth
  },
  nfpLine: {
    borderColor: '#00b159',
    borderWidth: 2,
    borderStyle: 'solid'
  }
}

export default styles