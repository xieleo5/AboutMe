---
title: "OKAMI: Teaching Humanoid Robots Manipulation Skills through Single Video Imitation"
tags:
  - "python"
date: 2024-5
excerpt: "We study the problem of teaching humanoid robots manipulation skills by imitating from single video demonstrations. We introduce OKAMI, a method that generates a manipulation plan from a single RGB-D video and derives a policy for execution. At the heart of our approach is object-aware retargeting, which enables the humanoid robot to mimic the human motions in an RGB-D video while adjusting to different object locations during deployment. OKAMI uses open-world vision models to identify task-relevant objects and retarget the body motions and hand poses separately.  Our experiments show that OKAMI  achieves strong generalizations across varying visual and spatial conditions, outperforming the state-of-the-art baseline on open-world imitation from observation. Furthermore, OKAMI rollout trajectories are leveraged to train closed-loop visuomotor policies, which achieve an average success rate of 79.2% without the need for labor-intensive teleoperation. More videos can be found on our 
[website](https://ut-austin-rpl.github.io/OKAMI/)." 
authors:
  - name: "xieleo"
    url: "https://github.com/xieleo5"
  - "xieleo"
path: "project/okami"
selected: true
cover: "./pull.png"
priority: 2
---

# OKAMI: Teaching Humanoid Robots Manipulation Skills through Single Video Imitation
<div align="center">

[[Website]](https://ut-austin-rpl.github.io/OKAMI/)
[[Arxiv]](https://arxiv.org/abs/2410.11792)
______________________________________________________________________

![](./pull.png)

</div>