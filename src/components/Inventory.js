import React from 'react'
import styled from 'styled-components'

export default function Inventory(props) {

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

  return (
    <StyledField>

      <div className="bag-window">
        <div className="bag-name">Choose items
          <span className="close-btn" onClick={() => props.onBagClose(false)}>X</span>
        </div>
        {
          items.map(item => <div key={item} className="bag-item">{item}</div>)
        }
      </div>
    </StyledField>
  )
}

const StyledField = styled.div`

.bag-window {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  width: 310px;
  height: 350px;
  z-index: 100;
  overflow-y: auto;
  font-weight: normal;
  color: yellow;
}

.bag-item {
  font-size: 40px;
  text-align: center;
  border: 2px solid yellow;
  width: 40px;
  height: 40px;
  margin: 2px;
  cursor: pointer;
}

.bag-name {
  width: 300px;
  height: 20px;
  text-align: center;
  position: relative;
}

.close-btn {
  color: red;
  border: 1px solid red;
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  right: 10px;
  cursor: pointer;  
}


`