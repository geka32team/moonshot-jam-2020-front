import React from 'react'
import styled from 'styled-components'
import Images from './Images'
import ReactTooltip from 'react-tooltip'

export default function Inventory(props) {

  const items = props.charData.items

  return (
    <StyledField>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
        id="inventory"
      />
      <div className="bag-window">
        <div className="bag-name">Choose items
          <span className="close-btn" onClick={() => props.onBagClose(false)}>X</span>
        </div>
        {
          items.map((item, i) => <div data-tip={props.itemsDescription(item, item.type)} data-for='inventory' data-type="info" key={item.name + i} className={item.is_weared ? "weared bag-item" : "not_weared bag-item"}>
            <img src={Images[item.url]} alt={item.name} />
            <span onClick={() => window.prompt('Do you really want to delete this item ?')}>x</span>
          </div>)
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
  align-content: start;
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
  position: relative;
  font-size: 40px;
  text-align: center;
  border: 2px solid #5f0;
  width: 40px;
  height: 40px;
  margin: 2px;
  cursor: pointer;
}

.not_weared {
  opacity: 0.5;
  border: 2px solid gray;
}

.bag-item>img {
  width: 40px;
  height: 40px;
}

.bag-item>span {
  position: absolute;
  display: inline-block;
  width: 12px;
  height: 12px;
  color: white;
  top: 0;
  right: 0;
  font-size: 16px;
  font-weight: 400;
  background-color: red;
  border-radius: 50%;
  line-height: 10px;
}

.bag-name {
  width: 300px;
  height: 20px;
  text-align: center;
  position: relative;
}

.close-btn {
  color: white;
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  right: 10px;
  cursor: pointer;  
  border-radius: 50%;
  background-color: red;
  line-height: 16px;
}


`