---
 layout: post
 title: Introduction
 date: 2025-03-02 12:00:00
 description: HPC Cluster와 Slurm job scheduler에 대한 설명 문서
 tags: HPC Slurm
---

## 1. HPC node

- Name: hpc

- CPU: INTEL® XEON® GOLD 6526Y CPU @ 2.20GHz 32 cores, 64 threads

- RAM: SAMSUNG M321R8GA0BB0-CQKZJ (64GB) x 4

- GPU: NVIDIA GeForce RTX 4090 x 1

- Storage: 2TB NVMe SSD, 8TB HDD

## 2. Slurm job scheduler

### Job scheduler

HPC(High performance computing) 시스템은 개인용 컴퓨터와 달리 여러 user가 `hpc node`를 공유하며 사용합니다. 따라서 누구의 작업이 언제 어느 node에서 실행될지 결정해 주어야 합니다. 이러한 역할을 수행하는 것이 job scheduler입니다.

Job scheduler를 식당의 웨이터에 비유할 수 있습니다. 식당에 사람이 많으면 줄을 서서 기다려야 합니다. 웨이터는 각 손님 그룹의 수에 맞는 자리가 나면 그 그룹을 테이블로 안내합니다.

![이미지0](/assets/img/img0.jpg)

**용어**

- Job: user가 클러스터에서 실행하고자 하는 코드(bash, python, R 등을 모두 포함)

- Batch job submission: user가 미리 작성한 코드(output을 파일로 저장하는 내용 포함)를 scheduler에게 제출하여 non-interactive하게 서버에서 실행하는 것

### Slurm

Slurm(Simple Linux Utility for Resource Management)은 HPC에서 많이 채용하는 job scheduler입니다. 전 세계 TOP 500 슈퍼컴퓨터 중 60%가 slurm을 사용합니다.

Slurm은 각 user의 cpu사용량 등 다양한 통계를 기반으로 작업의 우선순위를 결정할 수 있습니다. 예를 들어, University of Toronto의 Computer Science Department의 HPC는 사용 CPU 코어 수 * 사용 시간(초) 값이 낮은 user의 job을 먼저 실행합니다. RAM 사용량은 0.25GB당 CPU 1코어 사용으로, GPU 사용량은 GPU 1개당 CPU 16코어 사용으로 환산합니다.

현재 Yonseistat HPC는 위와 같은 점수제가 아닌 FIFO(First In, First Out) 규칙을 사용하고 있습니다. 일정 기간 운영해본 뒤 상황에 맞추어 규칙을 변경할 예정입니다.

## 3. Conda environment

### Virtual environment

Virtual environment를 사용하면 한 컴퓨터 내에서 각 user가 독립적으로 Python 패키지를 관리할 수 있습니다. 또한, 여러 컴퓨터에서 동일한 환경을 구축하여 패키지 버전 차이로 인한 문제 발생을 방지할 수 있습니다. 이는 특히 GPU driver, CUDA, cuDNN, 딥러닝 라이브러리의 버전 간 호환성이 중요한 딥러닝 job에서 유용합니다.

여러 user가 node를 공유하는 HPC에서 virtual environment의 사용은 필수적입니다. 각 user는 자신의 로컬 컴퓨터와 동일한 Python 환경을 node 내에 구축합니다. 그리고 로컬 컴퓨터에서 코드를 작성하고 이상 없이 실행되는지 테스트합니다. 문제 없이 실행되는 것이 확인된 코드를 slurm을 통해 클러스터에서 실행합니다. Virtual environment는 로컬에서 작성한 코드가 클러스터에서 문제 없이 작동하는 것을 보장합니다.

### Conda environment

Yonseistat HPC는 `conda`를 이용해 virtual environment를 구현합니다. `conda`는 Windows, MacOS, Linux를 모두 지원합니다.

Yonseistat HPC에서 Python job을 실행하기 위해서는 반드시 conda environment를 사용해야 합니다.