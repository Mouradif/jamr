/* eslint-disable */
import { Slider } from '@material-ui/core';
import React from 'react';
import * as Tone from 'tone';
import { Knob, Arc, Pointer } from 'rc-knob';

import { KEYS } from '../../constants/KeyCodes';
import { Notes } from '../../constants/KeyBindings';
import './Demo.scss';

class App extends React.Component {
  constructor() {
    super();
    this.synth = new Tone.PolySynth();
    this.distortion = new Tone.Distortion(0.6);
    this.chorus = new Tone.Chorus();
    this.phaser = new Tone.Phaser();
    this.state = {
      A: false,
      S: false,
      D: false,
      F: false,
      G: false,
      H: false,
      J: false,
      K: false,
      L: false,
      distortionLevel: 0,
      chorusLevel: 0,
      volumeLevel: -24,
      phaserLevel: 0,
      presets: [
        {
          image: 'sine.png',
          active: true,
          name: 'Sine',
          waveform: 'sine',
          octave: 0,
        },
        {
          image: 'saw.png',
          active: false,
          name: 'Saw',
          waveform: 'sawtooth',
          octave: -2,
        },
      ],
    };
  }

  getSelectedPreset() {
    return this.state.presets.find((p) => p.active);
  }

  componentDidMount() {
    this.initSynth();
    this.synth.toDestination();
  }

  initSynth() {
    this.synth.set({
      polyphony: 4,
      volume: this.state.volumeLevel,
      voice: Tone.MonoSynth,
      oscillator: {
        type: this.getSelectedPreset().waveform,
      },
      envelope: {
        attack: 0,
        decay: 1,
        sustain: 0.5,
        release: 0.5,
      },
    });
    this.synth.connect(this.distortion);
    this.distortion.wet.value = this.state.distortionLevel / 100;
    this.distortion.connect(this.chorus);
    this.chorus.wet.value = this.state.chorusLevel / 100;
    this.chorus.connect(this.phaser);
    this.phaser.wet.value = this.state.phaserLevel / 100;
    this.phaser.toDestination();
  }

  playNote(note) {
    console.log(note);
    const elements = note.trim().match(/^([A-G])([0-9])$/);
    if (elements === null) {
      throw new Error(`${note} is not a valid note`);
    }
    const { octave } = this.getSelectedPreset();
    note = `${elements[1]}${parseInt(elements[2]) + octave}`;
    this.synth.triggerAttackRelease(`${note}`, '8n');
  }

  onKeyDown(event) {
    if (
      [KEYS.A, KEYS.S, KEYS.D, KEYS.F, KEYS.G, KEYS.H, KEYS.J, KEYS.K, KEYS.L].includes(
        event.keyCode
      )
    ) {
      this.playNote(Notes[event.keyCode]);
      const keyIndex = Object.values(KEYS).indexOf(event.keyCode);
      const key = Object.keys(KEYS)[keyIndex];
      this.setState({ [key]: true });
    }
  }

  onKeyUp(event) {
    const keyIndex = Object.values(KEYS).indexOf(event.keyCode);
    const key = Object.keys(KEYS)[keyIndex];
    if (this.state[key] !== undefined) {
      this.setState({ [key]: false });
    }
  }

  selectPreset(name) {
    const { presets } = this.state;
    presets.forEach((p) => (p.active = false));
    presets.find((p) => p.name === name).active = true;
    this.setState({ presets }, this.initSynth);
  }

  setEffectValue(effect, value) {
    if (!['distortion', 'chorus', 'phaser'].includes(effect)) {
      throw new Error(`Unknown effect ${effect}`);
    }
    value = Math.min(value, 100);
    value = Math.max(value, 0);
    const key = `${effect}Level`;
    this.setState({ [key]: value }, this.initSynth);
  }

  setVolume(value) {
    this.setState({ volumeLevel: value }, this.initSynth);
  }

  render() {
    return (
      <div
        className="App"
        tabIndex="0"
        onKeyDown={this.onKeyDown.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
      >
        <header className="App-header">
          <p>Jamr</p>
        </header>
        <main>
          <div className="volume-control">
            <Slider
              min={-48}
              max={-12}
              value={this.state.volumeLevel}
              onChange={(evt, value) => this.setVolume(value)}
            />
          </div>
          <div className="preset-selector">
            {this.state.presets.map((preset) => (
              <div
                onClick={() => this.selectPreset(preset.name)}
                key={preset.name}
                className={['preset', preset.active ? 'active' : ''].filter(Boolean).join(' ')}
              >
                <img src={preset.image} />
                <br />
                <span>{preset.name}</span>
              </div>
            ))}
          </div>
          <div className="keyboard">
            <div className="keyboard-row">
              <div className={['key', this.state.A ? 'active' : ''].filter(Boolean).join(' ')}>
                A
              </div>
              <div className={['key', this.state.S ? 'active' : ''].filter(Boolean).join(' ')}>
                S
              </div>
              <div className={['key', this.state.D ? 'active' : ''].filter(Boolean).join(' ')}>
                D
              </div>
              <div className={['key', this.state.F ? 'active' : ''].filter(Boolean).join(' ')}>
                F
              </div>
              <div className={['key', this.state.G ? 'active' : ''].filter(Boolean).join(' ')}>
                G
              </div>
              <div className={['key', this.state.H ? 'active' : ''].filter(Boolean).join(' ')}>
                H
              </div>
              <div className={['key', this.state.J ? 'active' : ''].filter(Boolean).join(' ')}>
                J
              </div>
              <div className={['key', this.state.K ? 'active' : ''].filter(Boolean).join(' ')}>
                K
              </div>
              <div className={['key', this.state.L ? 'active' : ''].filter(Boolean).join(' ')}>
                L
              </div>
            </div>
          </div>
          <div className="knobs">
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={0}
              max={100}
              onChange={(value) => this.setEffectValue('distortion', value)}
            >
              <Arc arcWidth={5} color="#FC5A96" />
              <Pointer width={5} height={40} radius={10} type="rect" color="#FC5A96" />
            </Knob>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={0}
              max={100}
              onChange={(value) => this.setEffectValue('chorus', value)}
            >
              <Arc arcWidth={5} color="#FC5A96" />
              <Pointer width={5} height={40} radius={10} type="rect" color="#FC5A96" />
            </Knob>
            <Knob
              size={100}
              angleOffset={220}
              angleRange={280}
              min={0}
              max={100}
              onChange={(value) => this.setEffectValue('phaser', value)}
            >
              <Arc arcWidth={5} color="#FC5A96" />
              <Pointer width={5} height={40} radius={10} type="rect" color="#FC5A96" />
            </Knob>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
