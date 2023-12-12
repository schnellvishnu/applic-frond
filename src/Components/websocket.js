import * as React from 'react';


const websocket = () => {
                    const useWebSockets = () => {
                    React.useEffect(() => {
                                        const websocket = new WebSocket('192.168.200.134:2001');
                                    
                                        websocket.onopen = () => {
                                          console.log('connected');
                                        }
                                    
                                        websocket.onmessage = (event) => {
                                          const data = JSON.parse(event.data);
                                          alert(event.data)
                                        }
                                      
                                        return () => {
                                          websocket.close()
                                        }
                                      }, [])   
                    }             
  return (
    <div>websocket</div>
  )
}

export default websocket


// const useWebSockets = () => {
//   React.useEffect(() => {
//     const websocket = new WebSocket('192.168.200.134:2001');

//     websocket.onopen = () => {
//       console.log('connected');
//     }

//     websocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       alert(event.data)
//     }
  
//     return () => {
//       websocket.close()
//     }
//   }, [])
// }