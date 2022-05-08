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

Para simular o comportamento do pêndulo duplo, lança-se mão de um modelo matemático deste que fornece suas equações diferencias. A linguagem python possui bibliotecas capazes de processar e resolver computacionalmente equações deste tipo e a escolhida para este caso foi [scipy](https://scipy.org/). Esta biblioteca fornece diversos algoritmos de solução de problemas matemáticos, como integração, interpolação, autovalores, equações diferenciais, etc. Um dos pacotes desta biblioteca é o *integrate* que possui a função *odeint* que é capaz de resolver um sistema de equações diferenciais ordinárias.

A estrutura de um neurônio neo nebuloso é mostrada na Figura 1. Matematicamente a saída do neurônio pode ser descrita como:

$\begin{equation}
y = \[ \sum_{i=1}^{m} f_i(x_i) \]
\label{eq:fuzzy_out}
\end{equation}$

A entrada $x_i$ é dividida em diversos segmentos nebulosos que são caracterizados por funções de pertinência $\mu_{i1}$, $\mu_{i2}$,...,$\mu_{in}$ dentro de um espectro de valores entre $x_{min}$ e $x_{max}$. As funções de pertinência são seguidas por pesos variáveis $w_{i1}$,$w_{i2}$,...,$w_{in}$. A Figura 2 mostra com um diagrama de blocos a ideia de como cada entrada é dividida. Essa divisão se assemelha ao diagrama de blocos do neurônio mostrado na Figura 1, onde existe uma saída que é resultado da contribuição de diversas funções.

![Figura 1: Neurônio neo-nebuloso\label{mylabel}](/assets/blog/neural_network/Neo-Fuzzy-Neuron-Synapse.png)
Figura 1: Neurônio neo-nebuloso [fonte](https://www.researchgate.net/publication/239919031_A_Neo-Fuzzy_Approach_for_Bottom_Parameters_Estimation_in_Oil_Wells)

![Figura 2: Estrutura de uma sinapse de neurônio neo-nebuloso](/assets/blog/neural_network/synapse.png)
Figura 2: Synapse de um neurônio neo-nebulosa. Pode ser descrita como uma série de regras do tipo "se-senão" multiplicadas por um peso. [fonte](https://www.koreascience.or.kr/article/CFKO199311920545505.pdf)

A saída de cada sinapse é portanto dependente de dois fatores: a função de pertinência e o peso $w_{ij}$. Este peso é um número real e o processo de definir estes pesos é o chamado algoritmo de aprendizagem da rede neural. As funções de pertinência de uma NFN são ditas complementares, ou seja, dado um sinal de entrada $x_i$m apenas duas funções de pertinência são ativadas simultaneamente e estas são vizinhas uma da outra. As duas funções ativada recebem os índice $k$ e $k+1$ respectivamente. Além disso a soma do valor destas duas funções é
necessariamente 1, isto é: $\mu_{ik}(x_i)+\mu_{ik+1}(x_i)=1$. Com essa condição das funções serem complementares, a saída do neurônio pode ser expressa matematicamente de forma simplificada:

$\begin{equation}
f_i(x_i) = \frac{\sum_{j=1}^n \mu_{ij}(x_i)\cdot w_{ij}}{\sum_{j=1}^n \mu{ij}(x_i)} = \frac{\mu_{ik}w_{ik}+\mu_{ik+1}w_{ik+1}}{\mu_{ik}(x_i)+\mu_{ik+1}(x_i)} =  \mu_{ik}w_{ik}+\mu_{ik+1}w_{ik+1}
\label{eq:neuron_out}
\end{equation}$

## Algoritmo de aprendizagem

Conforme [Silva et all][2] o algoritmo de aprendizagem de uma NFN é um algoritmo baseado em gradiente com taxa de aprendizado ótima. 

Definindo um vetor de entradas para a rede neural em um determinado instante de tempo: $x = (x_1, x_2, ..., x_i, ..., x_n)$ este produzirá uma saída $y$ em um neurônio. É possível definir um erro baseado na diferença entre esta saída e a saída deseja $y_t$:

$$
E = y-y_t
$$

Dado o número de funções de pertinência fixo (granulação), o aprendizado da rede depende apenas de definir os valores dos pesos $w_{ij}$ de forma a minimizar o valor do erro. É possível demonstrar que o erro é uma função quadrática dos pesos e portanto o seu mínimo local também é global. A convergência para o mínimo do erro dependerá do ponto inicial, direção de busca e taxa de aprendizado. No caso se NFN assume-se como ponto inicial valores nulos. O gradiente descendente
fornece a direçao de busca mais simples. Portanto o valor $q_{ik}$ é atualizado de acordo:

$\begin{equation}
q_{ik_i} = q_{ik_i} - \alpha \cdot E \mu_{ik_i}(x_{i})
\label{eq:update_q}
\end{equation}$

O valor $\alpha$ é dada segundo o trabalho de [Silva et all][2] como sendo a taxa ótima de aprendizagem:

$\begin{equation}
\alpha = \frac{1}{\sum_{i=1}^n \mu{ik_i}(x_i)^2 + \mu_{ik_i+1}(x_i)^2}
\label{eq:alpha}
\end{equation}$

Com esssas informações é possível traçar um pseudo código contendo o algoritmo necessário para a rede neo-nebulosa ser treinada:

    Sejam os sinais de entrada dados por: x_i(t)
    Para cada instante de tempo t:
        Para cada neurônio N:
            Para cada entrada x_i:
                Computar a saída f_i(x_i) da sinapse respectiva a cada entrada devido às suas funções de pertinência
            Somar a contribuição de cada sinapse e obter a resposta do neurônio: y(t)
            Comparar com a resposta desejada yd(t) e obter o erro: E
            Calcular a taxa de aprendizado ótima: α
            Atualizar os pesos das funções de pertinência: q_{ik_i}

Para atingir um nível ótimo de treinamento é necessário realizar o chamadao embaralhamento do vetor de entrada da rede neural. A rede corre o risco de ter sua resposta enviesada pelo começo do sinal de entrada e procurar uma contínua replicação deste começo. Se o sinal apresenta uma contínua periodicidade isso não é um problema, já que seu comportamento no início e fim são semelhantes. Porém qualquer outro tipo de sinal é prejudicado por esta característica. Para evitar isso, o vetor de entrada e saída devem ser embaralhados de forma a manter a correlação entre seus índices. Por exemplo, seja $x(t)$ um vetor de uma entrada no tempo e $y(t)$ a respectiva saída:

$$
\displaylines{
  x(t) = \begin{bmatrix}1\ \\ 2\ \\ 3\ \\ 4\\end{bmatrix} \\\ y(t) = \begin{bmatrix}2\ \\ 4\ \\ 6\ \\ 8\\end{bmatrix}
}
$$

Após embaralhar o vetor $x(t)$, o vetor $y(t)$ deve também ser embaralhado mantendo a relação saída/entrada. O resultado de tal operação seria:

$$
\displaylines{
  x(t) = \begin{bmatrix}3\ \\ 2\ \\ 4\ \\ 1\\end{bmatrix} \\\ y(t) = \begin{bmatrix}6\ \\ 4\ \\ 8\ \\ 2\\end{bmatrix}
}
$$

Utilizando a linguagem python, foi implementado um modelo computacional da rede neural neo-nebulosa. Esse modelo é capaz de aprender a replicar sinais. Uma vez que a rede neural esteja treinada, ela irá reproduzir o mais fielmente possível a saída desejada para um conjunto de entradas semelhantes ao utilizado no treinamento.

Para validar e testar a capacidade da rede neo-nebulosa em reproduzir sinais, a princípio foram usadas algumas funções matemáticas simples.

## Validação da rede neo-nebulosa

### Função seno
A primeira função é $f(t) = sen(t)$. A rede neural possui como entrada o tempo e duas defasagens, ou seja, o vetor $x$ de entrada é

$$ x = \begin{bmatrix} t\ \\ t-1\ \\ t-2 \end{bmatrix} $$

A função de saída, ou seja a que deseja replicar é $f(t)$. 

![Figura 3: seno neo-nebuloso\label{mylabel}](/assets/blog/neural_network/rede_neo_nebulosa_replica_seno.png)
Figura 3: Rede neo-nebulosa para função seno com respectivo erro quadrático médio (MSE) - Fonte: Autor 

### Função de entumescimento
Uma função já conhecida matematicamente é bem fácil de se trabalhar, uma rede neural neo-nebulosa se mostra bem mais útil em ser treinada para reconhecer sinais os quais não há uma lei matemática por trás, como por exemplo o grau de entumescimento. Uma quantidade que mede o quanto uma amostra de material absorveu de um solvente. No ramo da química, um gráfico útil para caracterizar amostrar é justamente o do grau de entumescimento em função da temperatura. Esse exemplo ilustra bem a capacidade da rede neural em replicar um sinal, mas ao mesmo tempo sua maior deficiência, a necessidade de dados para treinamento.

Utilizando os dados fornecidos por [Ferreira][3] é possível demonstrar esse fenômeno. Observe que no primeiro caso, onde a rede foi utilizada apenas para replicar o sinal inicial, a rede tem um desempenho ótimo. Contudo o sinal possui poucos pontos do ponto de vista de treinamento de uma rede neural, e quando se aplica como entrada a temperatura em uma maior gama de valores, a rede neural tem saída nula pois não foi treinada para tais situações

![](/assets/blog/neural_network/rede_neo_nebulosa_replica_entumescimento_1.png)
![](/assets/blog/neural_network/rede_neo_nebulosa_replica_entumescimento_2.png)
Figura 4: Rede neo-nebulosa replicando uma curva de entumescimento- Fonte: Autor 

# Referencias
- [1]: <https://www.koreascience.or.kr/article/CFKO199311920545505.pdf> Yamakawa et all. **A New Effective Learning Algorithm for a Neo Fuzzy Neuron Model**
- [2]: <https://www.researchgate.net/publication/259162389_A_fast_learning_algorithm_for_evolving_neo-fuzzy_neuron> Silva et all. **A fast learning algorithm for evolving neo-fuzzy neuron**
- [3]: Ferreira, Leticia Batista Clarindo. **Título bacana do trabalho do meu amor**
