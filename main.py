def pattern_add(list2: List[number], freq: number, length: number):
    list2.append(freq)

def on_button_pressed_a():
    global current_freq, note_played_in_editor
    if mode == 2:
        current_freq += -1
        note_played_in_editor = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def play(freq2: number, length2: number):
    if length2 == 1:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
    elif length2 == 2:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
    elif length2 == 4:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.BREVE)),
            music.PlaybackMode.UNTIL_DONE)
    elif length2 == 0.5:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
    elif length2 == 0.25:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
    else:
        music.play(music.tone_playable(note_freqs[freq2], music.beat(BeatFraction.EIGHTH)),
            music.PlaybackMode.UNTIL_DONE)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global current_freq, note_played_in_editor
    if mode == 2:
        current_freq += 1
        note_played_in_editor = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global play_i
    if mode == 1:
        basic.show_icon(IconNames.EIGHTH_NOTE)
        music.play(music.tone_playable(392, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(698, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(784, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(523, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(880, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(784, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(698, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(698, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(784, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(587, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(698, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(523, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(784, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(1046.50, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(988, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(988, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(880, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(784, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(523, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(698, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(587, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(587, music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(523, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        music.rest(music.beat(BeatFraction.QUARTER))
        music.play(music.tone_playable(523, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.clear_screen()
    if mode == 2:
        play_i = 0
        for index in range(len(list3) + 1):
            music.play(music.tone_playable(list3[play_i], music.beat(BeatFraction.WHOLE)),
                music.PlaybackMode.UNTIL_DONE)
            play_i += 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

spr_y = 0
spr_x = 0
play_i = 0
list3: List[number] = []
note_played_in_editor = 0
mode = 0
note_freqs: List[number] = []
basic.show_leds("""
    # # . # #
    # . . # .
    # # . # #
    # # . . #
    # # . # #
    """)
music.set_tempo(140)
current_freq = 20
current_length = 3
note_lengths = [0.25, 0.5, 1, 2, 4]
note_freqs = [131,
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
    2093]
mode = 1
play(21, 0.25)
play(25, 0.25)
play(28, 0.25)
play(33, 1)
note_played_in_editor = 0
list3 = []
basic.clear_screen()

def on_forever():
    global mode, note_played_in_editor, spr_x
    if mode == 1:
        led.toggle(0, 0)
        basic.pause(200)
        if input.button_is_pressed(Button.A):
            mode = 2
            basic.clear_screen()
    if mode == 2:
        if not (note_played_in_editor):
            play(current_freq, 1)
            note_played_in_editor = 1
        if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):
            list3.append(note_freqs[current_freq])
            led.plot(spr_x, spr_y)
            spr_x += 1
basic.forever(on_forever)

def on_forever2():
    global spr_x, spr_y
    if spr_x >= 5:
        spr_x = 0
        spr_y += 1
    led.toggle(spr_x, spr_y)
    basic.pause(200)
basic.forever(on_forever2)
