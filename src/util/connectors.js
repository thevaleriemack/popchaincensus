import { Connect, SimpleSigner } from 'uport-connect'

// export let uport = new Connect('TruffleBox')

// this will go in a lambda function in production
export let uport = new Connect('popchain-test', {
  clientId: '2ohzyBATBoMnUfZTbfKRKJq193xDGaJj9xK',
  network: 'rinkeby',
  signer: SimpleSigner('767ce8cbe0635eb89969fd6e87ac5d7c995dc07c7c98011dbe2575083e1db511')
})

export const web3 = uport.getWeb3()
