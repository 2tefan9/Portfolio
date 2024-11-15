
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoSingleton<AudioManager> 
{
    [SerializeField]
    private AudioMixer audioMixer;
    [SerializeField]
    private AudioMixerGroup musicGroup, oneShotGroup;
    [SerializeField]
    private List<AudioSource> Musics;
    [SerializeField]
    private List<AudioSource> OneShots;
    public bool soundIsPlaying = true;
    public bool musicIsPlaying = true;

    public void MusicOff()
    {
        musicIsPlaying=false;
        musicGroup.audioMixer.SetFloat("MusicVolume", -80f);
    }
    public void MusicOn()
    {
        musicIsPlaying=true;
        musicGroup.audioMixer.SetFloat("MusicVolume", -22.00f);
    }

    public void SoundOff()
    {

        soundIsPlaying = false;
        oneShotGroup.audioMixer.SetFloat("OneShotsVolume", -80f);
    }

    public void SoundOn()
    {
        soundIsPlaying = true;
        oneShotGroup.audioMixer.SetFloat("OneShotsVolume", -10.6f);
    }

    public void PlaySpecificMusic(int index)
    {
        if (index >= 0 && index < Musics.Count)
        {
            Musics[index].Play();
        }
        else
        {
            Debug.LogWarning("Invalid index for music file.");
        }
    }
    public void StopSpecificMusic(int index)
    {
        if (index >= 0 && index < Musics.Count)
        {
            Musics[index].Stop();
        }
        else
        {
            Debug.LogWarning("Invalid index for music file.");
        }
    }

    public void PlaySpecificOneShot(int index)
    {
        if (index >= 0 && index < OneShots.Count)
        {
            OneShots[index].Play();
        }
        else
        {
            Debug.LogWarning("Invalid index for one-shot file.");
        }
    }
    public void StopSpecificOneShot(int index)
    {
        if (index >= 0 && index < OneShots.Count)
        {
            OneShots[index].Stop();
        }
        else
        {
            Debug.LogWarning("Invalid index for one-shot file.");
        }
    }

    public void PlayRandomOneShot(int [] index)
    {
        int randomIndex = index[Random.Range(0, index.Length)];
        OneShots[randomIndex].Play();
    }
}
