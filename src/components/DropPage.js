import React from 'react'
import styled from 'styled-components'
import Images from './Images'
import ReactTooltip from 'react-tooltip'

export default function DropPage(props) {
  return (
    <StyledField>
      <ReactTooltip
        multiline={true}
        aria-haspopup="true"
        delayShow={200}
        className="tooltip"
        id="drop"
      />
      <div className="drop-modal">
        <div className="drop">
        <div className="bag-name">Drop List
        </div>
          {
            props.characterInfo.items.map((item, i) => <div data-tip={props.itemsDescription(item, item.type)} data-type="info" data-for="drop" key={item.name + i} className="bag-item">
              <img src={Images[item.url]} alt={item.name} />
            </div>)
          }

        </div>
        <button onClick={() => props.onDrop(false)}>Ok</button>
      </div>
    </StyledField>
  )
}

const StyledField = styled.div`

.drop-modal {
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
  width: 180px;
  z-index: 100;
  overflow-y: auto;
  font-weight: normal;
  color: yellow;
  top: 100px;
  justify-content: center;
}

.drop {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}

.bag-item {
  position: relative;
  font-size: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  margin: 2px;
  cursor: pointer;
}

.bag-item>img {
  width: 40px;
  height: 40px;
}

.bag-name {
  width: 180px;
  height: 20px;
  text-align: center;
  position: relative;
}

.drop-modal button {
  margin-top: 30px;
  margin-bottom: 10px;
  color: yellow;
  width: 60px;
  padding: 3px 6px;
  background-color: #555;
  border-radius: 3px;
  cursor: pointer;
}
`
