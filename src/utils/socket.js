

const socket = require('socket.io')

const initializeSocket = (server)=>{
    const io = socket(server, {
        cors:{
            origin:"http://localhost:5173"
        }
    })

    io.on("connection", (socket)=>{

        socket.on("joinChat", ({userName, userId, targetUserId})=>{
            let roomId = [userId, targetUserId].sort().join("_")

            console.log(` ${userName} has joined the chat with id: ${roomId}`)
            socket.join(roomId)


        })

        socket.on("sendMessage", ({firstName, userId, targetUserId, message})=>{
            const roomId = [userId,targetUserId].sort().join("_")
            console.log(`${firstName} sent: ${message}`)
            io.to(roomId).emit("messageReceived",{firstName, message})
        })

        socket.on("disconnect", ()=>{})
        
    })
}

module.exports = initializeSocket;