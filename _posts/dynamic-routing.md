---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

# Introdução

Este trabalho tem o objetivo de analisar um sistema biarticulado com dois graus de liberdade. Este que consiste de duas hastes interligadas com uma apoiada em ponto fixo paralelo ao solo, de forma que todo o sistema esteja suspenso, de acordo com a figura 1. A ideia do sistema seria emular uma perna humana de maneira simplificada, onde a carga faz o papel do pé, e as articulações emulam joelho e quadril. Obviamente é um sistema bem simplificado pois a estrutura do corpo é bem mais complexa e com mais graus de liberdade.  

![Figura 1: Ilustração do sistema articulado](/assets/blog/dynamic-routing/Untitled.png)

Figura 1: Ilustração do sistema articulado

## Modelo matemático

Para realizar qualquer trabalho com este sistema, primeiro é necessário descreve-lo matematicamente. A dedução matemática é semelhante ao caso do pêndulo duplo descrita por [Assencio](https://diego.assencio.com/?index=1500c66ae7ab27bb0106467c68feebc6) utilizando a mecânica Lagrangeana, com a distinção de considerar um objeto composto de duas hastes com centro de gravidade não necessariamente em suas extremidades, conforme ilustra a figura 2.

![Figura 2: Modelo do sistema com massa concentrada em centro de gravidade](/assets/blog/dynamic-routing//Untitled%201.png)

Figura 2: Modelo do sistema com massa concentrada em centro de gravidade

As variáveis que constituem este modelo físico são:
- \\(m_1\\) – Massa da barra 1;
- \\(l_1\\) – Posição do centro de massa 1, medido a partir do eixo de rotação
da barra 1;
- \\(w_1\\) – Comprimento da barra 1;
- \\(m_2\\) – Massa da barra 2;
- \\(l_2\\) – Posição do centro de massa 2, medido a partir do eixo de rotação
da barra 2;
- \\(w_2\\) – Comprimento da barra 2.

Para descrever o sistema através do método de Lagrange, defini-se duas coordenadas generalizadas. As melhores coordenadas para descrever esse tipo de sistema são os ângulos de abertura com o eixo vertical de cada haste:

- $q_1$ - Ângulo do eixo 1;
- $q_2$ - Ângulo do eixo 2.

Tais ângulos relacionam-se com coordenadas cartesianas conforme exibido na figura 2 através de simples relações trigonométricas:

- $x_1 = l_1 sen(q_1)$
- $y_1 = -l_1 cos(q_1)$
- $x_2 = w_1 sen(q_1) + l_2 sen(q_2)$
- $y_2 = -w_1 cos(q_1) - l_2 cos(q_2)$

Cujas derivadas temporais (denotadas pelo ponto sobre a variável), que serão usadas no método Lagrangeano, são dadas pelas equações abaixo:

- $\dot{x_1} = \dot{q_1} l_1 cos(q_1)$
- $\dot{y_1} = \dot{q_2} l_1 sen(q_1)$
- $\dot{x_2} = \dot{q_1} w_1 cos(q_1) + \dot{q_2} l_2 cos(q_2)$
- $\dot{y_2} = \dot{q_1} w_1 sen(q_1) + \dot{q_2} l_2 sen(q_2)$

### Energias do sistema