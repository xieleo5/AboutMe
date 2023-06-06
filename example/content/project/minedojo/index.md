---
title: "MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge"
tags:
  - "python"
date: 2021-4
excerpt: "Autonomous agents have made great strides in specialist domains like Atari games and Go. However, they typically learn tabula rasa in isolated environments with limited and manually conceived objectives, thus failing to generalize across a wide spectrum of tasks and capabilities. Inspired by how humans continually learn and adapt in the open world, we advocate a trinity of ingredients for building generalist agents: 1) an environment that supports a multitude of tasks and goals, 2) a large-scale database of multimodal knowledge, and 3) a flexible and scalable agent architecture. We introduce MINEDOJO, a new framework built on the popular Minecraft game that features a simulation suite with thousands of diverse open-ended tasks and an internet-scale knowledge base with Minecraft videos, tutorials, wiki pages, and forum discussions. Using MINEDOJO’s data, we propose a novel agent learning algorithm that leverages large pre-trained video-language models as a learned reward function. Our agent is able to solve a variety of open-ended tasks specified in free-form language without any manually designed dense shaping reward. We open-source the simulation suite and knowledge bases (https://minedojo.org) to promote research towards the goal of generally capable embodied agents." 
authors:
  - name: "xieleo"
    url: "https://github.com/xieleo5"
  - "xieleo"
path: "project/minedojo"
selected: true
cover: "./preview.png"
links:
  - name: "github"
    file: "https://minedojo.org/"
priority: 5
---

## MineDojo v2.0
The new MineDojo v2.0 will use MineRL v1.0 as backend. Key feature:
- Support keyboard and mouse action
- Support Video-Pretraining Model from OpenAI
- Game version upgrade to v16.5
- All the minedojo old benchmarks are still able to use
### Link to v1.0
MineDojo v1.0 use Malmo as the backend.
[MineDojo | Building Open-Ended Embodied Agents with Internet-Scale Knowledge](https://minedojo.org/)