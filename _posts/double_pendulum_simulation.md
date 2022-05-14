---
title: 'Simulação do pêndulo duplo'
excerpt: 'O pêndulo duplo é um modelo físico amplamente estudado. Este trabalho pretende utilizar da linguagem de programação python para realizar a simulação do comportamento de um pêndulo duplo. A ideia é de que sirva de base para simular o movimento simplificado de uma perna humana visto a direta semelhança entre os sistemas.'
coverImage: '/assets/blog/double-pendulum-simulation/cover-image.png'
date: '2022-02-06T05:35:07.322Z'
author:
  name: Tiago da Costa Ferreira
  picture: '/assets/blog/authors/tiago.png'
ogImage:
  url: '/assets/blog/double-pendulum-simulation/cover-image.png'
---

# Introdução

O pêndulo duplo é um modelo físico amplamente estudado. Este trabalho pretende utilizar da linguagem de programação python para realizar a simulação do comportamento de um pêndulo duplo. A ideia é de que sirva de base para simular o movimento simplificado de uma perna humana visto a direta semelhança entre os sistemas.

Para atingir os objetivos de simulação, um [modelo matemático](https://tcc-blog.vercel.app/posts/physical_model) do sistema físico do pêndulo duplo foi desenvolvido e aplicado em código python que pode ser encontrado no [repositório](https://github.com/Tiago-hub/tcc2) do github do autor. 

# Objetivos 

Realizar uma simulação do modelo do pêndulo duplo que aceite como variáveis de entrada os parâmetros físicos do modelo, sendo estes: comprimento, massa e local do centro de massa dos corpos que compõem o modelo. O modelo deve aceitar também como entrada dois parâmetros de torque aplicado a cada um dos eixos. Em um primeiro momento o objetivo é obter os resultados de simulação para o pêndulo de forma natural, ou seja sem torque externo aplicado aos eixos e posteriormente observar os efeitos de um torque externo aplicado aos eixos.

# Considerações sobre o código

Para simular o comportamento do pêndulo duplo, lança-se mão de um modelo matemático deste que fornece suas equações diferencias. A linguagem python possui bibliotecas capazes de processar e resolver computacionalmente equações deste tipo e a escolhida para este caso foi [scipy](https://scipy.org/). Esta biblioteca fornece diversos algoritmos de solução de problemas matemáticos, como integração, interpolação, autovalores, equações diferenciais, etc. Um dos pacotes desta biblioteca é o *integrate* que possui a função *odeint* que é capaz de resolver um sistema de equações diferenciais ordinárias (EDO).

A função *odeint* requer como parâmetros de entrada um vetor (em python a estrutura de dados equivalente seria uma lista) onde cada entrada é uma EDO das variáveis que constituem o sistema. No caso do pêndulo duplo o objetivo é solucionar um problema de equações de movimento, que em geral são sistemas de segunda ordem e portanto precisam de duas equações para serem solucionados. Dado que o sistema possui dois ângulos de interesse, serão quatro equações para obter a solução do mesmo. A ideia aqui é a mesma de quando se deseja escrever a representação de um sistema em espaço de estados na teoria de controle e automação, definir as variáveis de interesse e escrever as equações do modelo físico em função de suas derivadas.
# Referencias
- [1]: <https://www.koreascience.or.kr/article/CFKO199311920545505.pdf> Yamakawa et all. **A New Effective Learning Algorithm for a Neo Fuzzy Neuron Model**
- [2]: <https://www.researchgate.net/publication/259162389_A_fast_learning_algorithm_for_evolving_neo-fuzzy_neuron> Silva et all. **A fast learning algorithm for evolving neo-fuzzy neuron**
- [3]: Ferreira, Leticia Batista Clarindo. **Título bacana do trabalho do meu amor**
