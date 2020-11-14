import React from 'react'
import boopSfx from './audio/moon_sound.wav'

export default function Header() {
    return (
        <header>Header<audio src={boopSfx} autoPlay loop/></header>
    )
}
