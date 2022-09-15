import io from 'socket.io-client'

const URL = 'socketchess.campuus.us:8000'

const socket = io(URL)

var mySocketId
// registre oyentes de eventos preliminares aquí:


socket.on("createNewGame", statusUpdate => {
    console.log("A new game has been created! Username: " + statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}
