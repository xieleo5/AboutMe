---
title: "Reimplement of WGAN"
tags:
  - "python"
date: 2020-12
excerpt: "In this project, we implemented Wasserstein in Generative Adversarial Network (WGAN), as well as WGAN with gradient penalty (WGANGP). Wasserstein Generative Adversarial Networks (WGAN) was developed based on the Generative Adversarial Networks (GAN), which is a powerful generative model but still suffering from some defects. It modified the loss function of the original GAN, which made the training more stable and solved the mode collapse problem of the original GAN. The main breaking point of this network is using the Wasserstein Distance instead of KL and JS divergence. However, the weight clipping in WGAN could still cause gradient vanishing or exploding. Therefore, the gradient penalty was introduced to settle it. We regard WGAN as a landmark in the history of GAN, as it makes GAN’s loss function much more interpretable. We carried out 4 parts of experiments: quantitatively evaluate the generation quality with Fréchet Inception Distance (FID) score, testing on training stability, evaluating generation diversity, and testing the performance of gradient penalty. The experiments were carried out on three datasets: LSUN Bedroom, CelebA, and AnimefacesDanbooru, where LSUN bedroom is the dataset used in the WGAN paper. Our experiment results verified the claim in WGAN and WGANGP paper. However, with testing the FID score, we thought the generation quality was something that can be improved further."
authors:
  - name: "xieleo"
    url: "https://github.com/xieleo5"
  - "xieleo"
path: "project/rewgan"
selected: false
cover: "./preview.png"
links:
  - name: "pdf"
    file: "./wgan.pdf"
priority: 10
---

## Link to paper
[download pdf](./wgan.pdf)