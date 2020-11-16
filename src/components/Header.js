import React from 'react'
import moon_sound from '../assets/audio/moon_sound.wav'

export default function Header() {
    return (
        <header>Header
            <audio src={moon_sound} autoPlay loop/>
        </header>
    )
}
