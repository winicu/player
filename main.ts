input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (mode == 1) {
        basic.showIcon(IconNames.EighthNote)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(1046.50, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
    if (mode == 2) {
        if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            play_i = 0
            for (let index = 0; index < list3.length + 1; index++) {
                if (llist3_length[play_i] == 1) {
                    music.play(music.tonePlayable(list3[play_i], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                } else if (llist3_length[play_i] == 2) {
                    music.play(music.tonePlayable(list3[play_i], music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
                } else if (llist3_length[play_i] == 4) {
                    music.play(music.tonePlayable(list3[play_i], music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
                } else if (llist3_length[play_i] == 0.5) {
                    music.play(music.tonePlayable(list3[play_i], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
                } else if (llist3_length[play_i] == 0.25) {
                    music.play(music.tonePlayable(list3[play_i], music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                }
                play_i += 1
            }
        }
    }
})
function pattern_add (list2: number[], freq: number, length: number) {
    list2.push(freq)
}
input.onButtonPressed(Button.A, function () {
    if (mode == 2) {
        current_freq += -1
        note_played_in_editor = 0
    }
})
function play (freq2: number, length2: number) {
    if (length2 == 1) {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (length2 == 2) {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else if (length2 == 4) {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else if (length2 == 0.5) {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (length2 == 0.25) {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(note_freqs[freq2], music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
}
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A)) {
        if (mode == 2) {
            current_length += -1
            note_played_in_editor = 0
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (mode == 2) {
            current_length += 1
            note_played_in_editor = 0
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (mode == 2) {
        current_freq += 1
        note_played_in_editor = 0
    }
})
let spr_y = 0
let spr_x = 0
let llist3_length: number[] = []
let play_i = 0
let list3: number[] = []
let note_played_in_editor = 0
let mode = 0
let note_freqs: number[] = []
basic.showLeds(`
    # # . # #
    # . . # .
    # # . # #
    # # . . #
    # # . # #
    `)
let note_input_hold = 1
music.setTempo(144)
let tempo = 144
let current_freq = 20
let current_length = 1
let note_lengths = [
0.25,
0.5,
1,
2,
4
]
note_freqs = [
131,
139,
147,
156,
165,
175,
185,
196,
196,
207.65,
220,
233.08,
246.94,
261.63,
277.18,
293.66,
311.13,
329.63,
349.23,
369.99,
392,
415.3,
440,
466.16,
493.88,
523.25,
554.37,
587.33,
622.25,
659.26,
698.46,
739.99,
783.99,
830.61,
880,
932.33,
987.77,
1046.5,
1108.73,
1174.66,
1244.51,
1318.51,
1396.91,
1479.98,
1567.98,
1661.22,
1760,
1864.66,
1975.53,
2093
]
mode = 1
play(21, 0.25)
play(25, 0.25)
play(28, 0.25)
play(33, 1)
note_played_in_editor = 0
list3 = []
basic.clearScreen()
basic.forever(function () {
    if (mode == 1) {
        led.toggle(0, 0)
        basic.pause(200)
        if (input.buttonIsPressed(Button.A)) {
            mode = 2
            basic.clearScreen()
        } else if (input.buttonIsPressed(Button.B)) {
            if (tempo == 144) {
                music.setTempo(140)
                tempo = 140
            } else if (tempo == 140) {
                music.setTempo(156)
                tempo = 156
            } else if (tempo == 156) {
                music.setTempo(140)
                tempo = 140
            }
            basic.showString("" + (tempo))
        }
    }
    if (mode == 2) {
        if (!(note_played_in_editor)) {
            play(current_freq, 0.5)
            note_played_in_editor = 1
        }
        if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
            if (!(spr_x >= 4 && spr_y >= 4)) {
                if (note_input_hold) {
                    note_input_hold = 0
                    list3.push(note_freqs[current_freq])
                    llist3_length.push(note_lengths[current_length])
                    led.plot(spr_x, spr_y)
                    spr_x += 1
                }
            } else {
                basic.showIcon(IconNames.No)
                basic.pause(1000)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (spr_x >= 5) {
        spr_x = 0
        spr_y += 1
    }
    if (mode == 2) {
        led.toggle(spr_x, spr_y)
        basic.pause(200)
        if (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
            note_input_hold = 1
        }
    }
})
