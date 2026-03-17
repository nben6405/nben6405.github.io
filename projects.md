---
layout: default
title: Projects
---

<div class="project-card" markdown="1">

# Projects

<span style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; letter-spacing: 0.09em; text-transform: uppercase; color: #9e9a88;">RF Heating Internship @ Commonwealth Fusion Systems</span>

This presentation covers the main projects I worked on during my internship at CFS.

<div class="video-container">
  <iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vRG-ejUZ-pB246nUbGF_D_WAVyZ-FZJDoiDNUP27NtYX7g0VsBFA2iKVXxhr2lnRQ/pubembed?start=false&loop=false&delayms=3000"
    frameborder="0" width="960" height="569"
    allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
  </iframe>
</div>

</div>

<div class="project-card" markdown="1">

<span style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; letter-spacing: 0.09em; text-transform: uppercase; color: #9e9a88;">Raspberry Pi Data Acquisition System</span>

A fully automated data acquisition system for real-time sensor measurement collection during wheel force transducer testing. Integrates Raspberry Pi GPIO control, MCC DAQ analog acquisition hardware, real-time calibration mapping, and automated post-processing visualization.

Sensor channels include front/rear shock potentiometers (displacement in inches) and front/rear brake pressure sensors (PSI), with raw voltages automatically mapped to physical units via a YAML calibration config.

- Boot-time auto-execution with pushbutton start/stop and LED status feedback
- Continuous buffered multichannel analog sampling via ULDAQ
- Outputs calibrated CSV, raw CSV, calibration YAML snapshot, and stacked plots

<a href="https://github.com/nben6405/sensors-wft" target="_blank" rel="noopener noreferrer">View on GitHub →</a>

</div>
