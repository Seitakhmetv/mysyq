import React, { useState, forceUp, useContext } from 'react'
import {Popup} from 'reactjs-popup'
import { UserContext } from '../UserContext'
import './Playground.css'

export default function Playground(props) {
    const [User, setUser] = useContext(UserContext)

    const initalGrid = props.grid
    const [movesMade, setMovesMade] = useState(0)
    const [grid, setGrid] = useState(initalGrid)
    const [catDir, setCatDir] = useState("up")
    const [modalStuff, setModalStuff] = useState({
        trigger: false, 
        modalHeader: "You Lost!", 
        modalContent: "Someone else got your bounty, hunter. Better luck next time!"
    })

    const colorCell = (event) => {
        //add to move count
        setMovesMade(movesMade+1)
        console.log(movesMade)
        //coloring the cell
        let r = event.target.dataset.rowid;
        let c = event.target.dataset.colid;
        const cellID = r + " " + c
        const cell = document.getElementById(cellID)
        const trap = ["beartrap", "firetrap", "spiketrap"][Math.floor((Math.random() * 3))]
        
        cell.classList.add(trap)
        
        //updating the array
        let temp = [...grid]
        temp[r][c] = 1
        
        //get cat's cur
        let [catx, caty] = [-1, -1]
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[0].length; j++) {
                const element = temp[i][j];
                if(element === 2){
                    [catx, caty] = [i, j]
                }
            }
        }

        // get coordinates of the nearest to border
        let [mini, minj] = catMove(catx, caty, temp)
        
        temp[catx][caty] = 0
        if (mini > catx && grid[catx+1][caty]!== 1){
            catx++
            setCatDir("down")
        }
        else if (mini < catx && grid[catx-1][caty]!== 1){
            catx--
            setCatDir("up")
        }
        else if (minj > caty && grid[catx][caty+1] !== 1){
            caty++
            setCatDir("right")
        }
        else if (minj < caty && grid[catx][caty-1] !== 1){
            caty--
            setCatDir("left")
        }
        
        temp[catx][caty] = 2
        setGrid(temp)
        

        //check for win
        if(catx === 0 || catx === grid.length-1 || caty === 0 || caty === grid.length-1){
            const originalHistory = User.history
            setUser({"name": User.name, "score": 0, "history": [...User.history, {"name": User.name, "score": 0}]})
            setModalStuff({
                trigger: true, 
                modalHeader: "You Lost!", 
                modalContent: "Someone else got your bounty, hunter. Better luck next time!"
            })
        }
        if(grid[catx][caty+1] + grid[catx][caty-1] + grid[catx-1][caty] + grid[catx+1][caty] === 4)
        {
            setUser({"name": User.name, "score": 500-movesMade*4, "history": [...User.history, {"name": User.name, "score": 500-movesMade*4}]})
            setModalStuff({
                trigger: true, 
                modalHeader: "Congratulations!", 
                modalContent: <div>You have caught that cat! <br/><br/> Your reward: ${500-movesMade*4} </div>
            })
        }
    }

    const catMove = (row, col, grid) => {
        let dist = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
        let queue = []
        let visited = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
        const dx = [0, 0, -1, 1]
        const dy = [-1, 1, 0, 0]
        queue.push([row, col])
        let [i, j] = [row, col]
        visited[i][j] = true
        while(queue.length > 0){
            [row, col] = queue.shift()
            for (let x = 0; x < 4; x++) {
                const newx = row + dx[x]
                const newy = col + dy[x]
                if(newx < 0 ||  newy < 0 || newx >= grid.length || newy >= grid[0].length || grid[newx][newy] !== 0){
                    continue
                }
                if(!visited[newx][newy] && !grid[newx][newy]){
                    dist[newx][ newy] = dist[row][col] + 1
                    queue.push([newx, newy])
                    visited[newx][newy] = true
                }            
            }
        }
        let mxtop = [grid.length+100]
        for (let top = 0; top < dist[0].length; top++) {
            const element = dist[0][top];
            if(mxtop[0] >= element){
                mxtop = [element, 0, top]
            }
        }
        let mxleft = [grid.length+100]
        for (let top = 0; top < dist[0].length; top++) {
            const element = dist[top][0];
            if(mxleft[0] >= element){
                mxleft = [element, top, 0]
            }
        }
        let mxbot = [grid.length+100]
        for (let top = 0; top < dist[0].length; top++) {
            const element = dist[dist.length-1][top];
            if(mxbot[0] >= element){
                mxbot = [element, dist.length-1, top]
            }
        }
        let mxright = [grid.length+100]
        for (let top = 0; top < dist[0].length; top++) {
            const element = dist[top][dist.length-1];
            if(mxright[0] >= element){
                mxright = [element, top, dist.length-1]
            }
        }
        
        const mx = [mxbot, mxleft, mxright, mxtop].reduce((prev, curr) => prev[0] < curr[0] ? prev : curr)
        return [mx[1], mx[2]]
    }

    const rematch = () => {
        console.log(initalGrid)
    }

    return (
        <div className="playground-container" id='playground-container'>
            <Popup open={modalStuff.trigger} modal onClose={rematch}>
                <div className="modal glass">
                    <div className="header">{modalStuff.modalHeader}</div>
                    <div className="content">
                        {modalStuff.modalContent}
                    </div>
                </div>
            </Popup>
            <div className="grid">
                {
                    grid.map((row, rowid)=>{
                      return(
                        <div className="grid-row" key={rowid}>
                            {row.map((cell, colid) => {
                                return(
                                    
                                    <div key={[colid]} 
                                        data-rowid={rowid} data-colid={colid} 
                                        className={cell === 2? `cat cell ${catDir}`: "cell"} 
                                        id={(rowid === 0 || rowid === grid.length-1 || colid === 0 || colid === grid.length-1)? "border": `${rowid + " " + colid}`}
                                        onClick={colorCell}></div>
                                    )
                            })}
                        </div>
                      )  
                    })
                }
            </div>
        </div>
    )
}


