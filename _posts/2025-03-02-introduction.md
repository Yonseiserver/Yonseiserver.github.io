---
layout: post
title: Introduction
date: 2025-03-02 12:00:00
last_updated: 2026-03-27 12:00:00
description: 연세대학교 통계데이터사이언스학과 HPC 클러스터와 Slurm 사용 안내
tags: HPC Slurm
---

## 1. 학과 서버 소개

연세대학교 통계데이터사이언스학과 서버는 여러 대의 서버를 하나의 클러스터처럼 묶어서 사용하는 HPC(High Performance Computing) 환경입니다.  
사용자는 각 서버를 개별적으로 관리할 필요 없이, 하나의 시스템 안에서 Python, R, TensorFlow 등의 작업을 수행할 수 있습니다.

현재 학과 서버는 다음과 같이 구성되어 있습니다.

- **관리 노드**
  - `hpcmaster`

- **계산 노드**
  - `hpc`
  - `hpc-stat1`
  - `brl0`
  - `brl1`
  - `brl2`
  - `brl3`
  - `brl4`
  - `brl5`

`hpcmaster`는 클러스터 전반의 작업 관리와 공통 서비스 운영을 담당하는 중심 노드입니다.  
예를 들어 Slurm 스케줄러의 관리 기능은 이 노드를 중심으로 이루어집니다.

반면 `hpc`, `hpc-stat1`, `brl0`~`brl5`는 사용자의 계산 작업이 실행되는 계산 노드입니다.  
각 노드는 CPU와 GPU 자원을 가지고 있으며, 실제 분석 및 학습 작업은 주로 이 노드들에서 수행됩니다.

사용자는 작업 환경이나 설정에 따라 여러 노드에 접속할 수 있습니다.  
그러나 실제 계산은 셸에서 직접 장시간 실행하지 않고, 원칙적으로 Slurm을 통해 제출하는 방식으로 운영합니다.

## 2. 왜 Slurm을 사용하나요?

학과 서버는 개인용 컴퓨터와 달리 여러 사용자가 함께 사용하는 공용 계산 환경입니다.  
누군가는 짧은 코드 테스트를 하고, 누군가는 오래 걸리는 학습 작업을 수행하며, 누군가는 GPU를 필요로 할 수 있습니다.

이때 모든 사용자가 각자 서버에서 직접 Python이나 R을 실행하면,

- 특정 사용자가 자원을 과도하게 점유할 수 있고,
- 다른 사용자의 작업이 지연되거나 실행되지 않을 수 있으며,
- 전체 서버 운영이 불안정해질 수 있습니다.

이러한 문제를 줄이기 위해 학과 서버는 **Slurm job scheduler**를 사용합니다.

어떤 작업을 언제, 어느 계산 노드에서 실행할지 정해 주는 역할을 하는 것이 바로 job scheduler입니다.

Job scheduler는 식당의 웨이터에 비유할 수 있습니다.  
식당에 손님이 많으면 모든 손님이 바로 자리에 앉을 수 없고, 웨이터가 빈 자리를 확인하여 순서대로 안내해야 합니다.  
마찬가지로 서버에서도 동시에 많은 작업이 제출되면, 어떤 작업이 먼저 실행될지, 어느 노드에 배정될지를 정해 주는 시스템이 필요합니다.  
Slurm은 각 작업이 필요로 하는 CPU, GPU, 메모리 등의 자원을 고려하여 실행 가능한 노드에 작업을 배정합니다.

<img src="/assets/img/img0.jpg" width="900" height="600"/>
<!-- ![이미지0](/assets/img/img0.jpg) -->

따라서 학과 서버에서는 Python, R, TensorFlow 등 계산 작업을 **원칙적으로 Slurm을 통해 실행**합니다.

## 3. Job이란 무엇인가요?

Slurm에서는 사용자가 서버에서 실행하려는 작업을 **job**이라고 부릅니다.

예를 들어 다음과 같은 것들이 모두 job이 될 수 있습니다.

- Python 스크립트 실행
- R 코드 실행
- 딥러닝 학습
- 데이터 전처리
- 결과 파일 저장

보통 사용자는 실행할 내용을 스크립트 파일로 작성한 뒤, 이를 Slurm에 제출하여 실행합니다.  
이 방식을 **batch job submission**이라고 합니다.

즉, 서버에서 작업을 실행하는 일반적인 흐름은 다음과 같습니다.

1. 로컬 또는 서버에서 코드 작성
2. 필요한 환경 준비
3. Slurm 제출 스크립트 작성
4. job 제출
5. output 및 log 확인

## 4. Python/R 실행 환경

학과 서버에서는 패키지 충돌을 방지하고 환경을 안정적으로 관리하기 위해, 사용자별 독립 실행 환경(가상환경)을 사용합니다.  
특히 Python의 경우, **Miniconda 기반 가상환경**을 사용하여 필요한 패키지와 버전을 각자 관리합니다.

구체적인 설치 및 사용 방법은 아래 문서를 참고해 주세요.

- **SSH 접속 및 job 실행하기**
- **Python 실행하기**
- **R 실행하기**
- **TensorFlow 실행하기**
- **이용 규칙**

## 5. 서버 사양 요약

| Node | Role | CPU | RAM | GPU | Root Storage |
|------|------|-----|-----|-----|--------------|
| hpcmaster | management | Intel Xeon E-2414 (4 threads) | 62 GiB | 없음 | 1.8T |
| hpc | compute | Intel Xeon Gold 6526Y (64 threads) | 251 GiB | RTX 4090 × 2 | 1.8T |
| hpc-stat1 | compute | AMD EPYC 9354 (128 threads) | 503 GiB | RTX 6000 Ada × 5 | 3.5T |
| brl0 | compute | Intel Xeon Gold 6226R (64 threads) | 251 GiB | RTX A5000 × 8 | 916G |
| brl1 | compute | Intel Xeon Gold 6226R (64 threads) | 251 GiB | RTX A5000 × 8 | 916G |
| brl2 | compute | Intel Xeon Gold 6226R (64 threads) | 251 GiB | RTX A5000 × 8 | 1.8T |
| brl3 | compute | Intel Xeon Gold 6426Y (64 threads) | 251 GiB | RTX A5000 × 8 | 1.8T |
| brl4 | compute | Intel Xeon Gold 6526Y (64 threads) | 251 GiB | RTX A5000 × 8 | 1.8T |
| brl5 | compute | AMD EPYC 9254 (96 threads) | 251 GiB | RTX 4090 × 8 | 1.8T |