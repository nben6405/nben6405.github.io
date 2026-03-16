## RF Heating Internship @ Commonwealth Fusion Systems
This presentation covers the main projects I worked on during my internship at CFS. 

<div class="video-container">
  
  <iframe
    src="https://docs.google.com/presentation/d/e/2PACX-1vRG-ejUZ-pB246nUbGF_D_WAVyZ-FZJDoiDNUP27NtYX7g0VsBFA2iKVXxhr2lnRQ/pubembed?start=false&loop=false&delayms=3000" 
    frameborder="0" 
    width="960" 
    height="569" 
    allowfullscreen="true" 
    mozallowfullscreen="true" 
    webkitallowfullscreen="true">
    
    </iframe>
</div>

---

## Raspberry Pi Data Acquisition System
A fully automated data acquisition system designed for real-time sensor measurement collection during wheel force transducer testing. The system integrates Raspberry Pi GPIO control, MCC DAQ analog acquisition hardware, real-time calibration mapping, and automated post-processing visualization.

Sensor channels include front/rear shock potentiometers (displacement in inches) and front/rear brake pressure sensors (PSI), with all raw voltages automatically mapped to physical units via a YAML calibration config. Data is logged continuously to timestamped CSVs and plots are generated automatically when logging stops.

Key features:
- Boot-time auto-execution with pushbutton start/stop and LED status feedback
- Continuous buffered multichannel analog sampling via ULDAQ
- Outputs calibrated CSV, raw CSV, calibration YAML snapshot, and stacked plots

<a href="https://github.com/nben6405/sensors-wft" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
