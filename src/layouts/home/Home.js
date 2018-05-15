import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome to Popchain</h1>
            <p>Popchain provides statistics and data analytics to answer the question: Who lives in the United States?</p>
            <h2>The Open Census Protocol</h2>
            <p>Popchain collects data using the Open Census Protocol. This means that the Popchain census is:
              <ul>
                <li>Extensible. Individuals and collective communities can decide what questions they want be asked and what questions they want to answer.</li>
                <li>Private. An individual will not be identifiable by their data input.</li>
                <li>Transparent. The anonymized submissions can be verified by anyone.</li>
                <li>Decentralized. A network of nodes collectively agrees to maintain the security and immutability of the data by way of the Ethereum blockchain.</li>
              </ul>
            </p>
            <h3>Learn more</h3>
            <p>Read our whitepaper: <a href="/" target="_blank">Coming Soon!</a></p>
            <h3>A Decentralized Application on Ethereum</h3>
            <p>When you submit your census data, it is securely and anonymously stored on the Ethereum blockchain</p>
            <pre><code>
              {"// Verify signature before sending data"}<br/>
              {"function verify(bytes32 hash, uint8 v, bytes32 r, bytes32 s) public constant returns(bool) {"}<br/>
              {"  bytes memory prefix = 'x19Ethereum Signed Message:n32';"}<br/>
              {"  bytes32 prefixedHash = keccak256(prefix, hash);"}<br/>
              {"  return ecrecover(prefixedHash, v, r, s) == msg.sender;"}<br/>
              {"}"}
            </code></pre>
          <h3>Team:</h3>
          <p><ul><li><a href="thevaleriemack.github.io" >Val Mack</a></li><li>Gael Gundin</li></ul></p>
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
