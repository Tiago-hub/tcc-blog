---
title: 'Rede Neural Nebulosa'
excerpt: 'As redes neurais são estruturas inspiradas no cérebro humano, que imitam a maneira que neurônios enviam sinais uns aos outros. Possuem diversas aplicações no campo da robótica, análise de dados, processamento de sinais, medicina e engenharia. São pesquisadas desde a década de 1950 e desde então diferentes tipos de redes neurais foram desenvolvidas. Este post irá focar no tipo denominado Nebulosa, mais especificamente uma rede que usa o o neurônio neo-nebuloso descrito por
[Tamaka et all][1]'
coverImage: '/assets/blog/dynamic-routing//Untitled%201.png'
date: '2022-02-06T05:35:07.322Z'
author:
  name: Tiago da Costa Ferreira
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing//Untitled%201.png'
---

# Introdução

As redes neurais são estruturas inspiradas no cérebro humano, que imitam a maneira que neurônios enviam sinais uns aos outros. Possuem diversas aplicações no campo da robótica, análise de dados, processamento de sinais, medicina e engenharia. São pesquisadas desde a década de 1950 e desde então diferentes tipos de redes neurais foram desenvolvidas. Este post irá focar no tipo denominado Nebulosa, mais especificamente uma rede que usa o o neurônio neo-nebuloso (NFN do inglês) descrito por ![Tamaka et all][1].

A escolha do NFN se dá principalmente devido a sua simplicidade, baixo custo computacional e precisão [Silva et all][2].

#Arquitetura de um neurônio neo-nebuloso

A estrutura de um neurônio neo nebuloso é mostrada na Figura 1. Matematicamente a saída do neurônio pode ser descrita como:

$\begin{equation}
y = \[ \sum_{i=1}^{m} f_i(x_i) \]
\label{eq:fuzzy_out}
\end{equation}$

A entrada $x_i$ é dividida em diversos segmentos nebulosos que são caracterizados por funções de pertinência $\mu_{i1}$, $\mu_{i2}$,...,$\mu_{in}$ dentro de um espectro de valores entre $x_{min}$ e $x_{max}$. As funções de pertinência são seguidas por pesos variáveis $w_{i1}$,$w_{i2}$,...,$w_{in}$. A Figura 2 mostra com um diagrama de blocos a ideia de como cada entrada é dividida. Essa divisão se assemelha ao diagrama de blocos do neurônio mostrado na Figura 1, onde existe uma saída que é resultado da contribuição de diversas funções.

![Figura 1: Neurônio neo-nebuloso\label{mylabel}](/assets/blog/neural_network/Neo-Fuzzy-Neuron-Synapse.png)
Figura 1: Neurônio neo-nebuloso [fonte](https://www.researchgate.net/publication/239919031_A_Neo-Fuzzy_Approach_for_Bottom_Parameters_Estimation_in_Oil_Wells)

![Figura 2: Estrutura de uma sinapse de neurônio neo-nebuloso](synapse.png)
Figura 2: Synapse de um neurônio neo-nebulosa. Pode ser descrita como uma série de regras do tipo "se-senão" multiplicadas por um peso. [fonte](https://www.koreascience.or.kr/article/CFKO199311920545505.pdf)

A saída de cada sinapse é portanto dependente de dois fatores: a função de pertinência e o peso $w_{ij}$. Este peso é um número real e o processo de definir estes pesos é o chamado processo de aprendizagem da rede neural. As funções de pertinência de uma NFN são ditas complementares, ou seja, dado um sinal de entrada $x_i$m apenas duas funções de pertinência são ativadas simultaneamente e estas são vizinhas uma da outra. As duas funções ativada recebem os índice $k$ e $k+1$
respectivamente. Além disso a soma do valor destas duas funções é
necessariamente 1, isto é: $\mu_{ik}(x_i)+\mu_{ik+1}(x_i)=1$. Com essa condição das funções serem complementares, a saída do neurônio pode ser expressa matematicamente de forma simplificada:

$\begin{equation}
f_i(x_i) = \frac{\sum_{j=1}^n \mu_{ij}(x_i)\cdot w_{ij}}{\sum_{j=1}^n \mu{ij}(x_i)} = \frac{\mu_{ik}w_{ik}+\mu_{ik+1}w_{ik+1}}{\mu_{ik}(x_i)+\mu_{ik+1}(x_i)} =  \mu_{ik}w_{ik}+\mu_{ik+1}w_{ik+1}
\label{eq:neuron_out}
\end{equation}$


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

$\begin{equation}
\dot{x_1} = \dot{q_1} l_1 cos(q_1)
\label{eq:x1.}
\end{equation}$

$\begin{equation}
\dot{y_1} = \dot{q_2} l_1 sen(q_1)
\label{eq:y1.}
\end{equation}$

$\begin{equation}
\dot{x_2} = \dot{q_1} w_1 cos(q_1) + \dot{q_2} l_2 cos(q_2)
\label{eq:x2.}
\end{equation}$

$\begin{equation}
\dot{y_2} = \dot{q_1} w_1 sen(q_1) + \dot{q_2} l_2 sen(q_2)
\label{eq:y2.}
\end{equation}$


### Energias do sistema

Duas energias estão presentes no modelo considerado, a cinética e a potencial gravitacional. Utilizando a definição de energia cinética $T = \frac{1}{2}mv^2$, considera-se que o sistema é constituído de dois corpos e a energia total deste é a soma das energias individuais de cada um. Portanto:

$\begin{equation}
T = \frac{1}{2}m_1\(\dot{x_1}^2+\dot{y_1}^2\) + \frac{1}{2}m_1\(\dot{x_2}^2+\dot{y_2}^2\) 
\label{eq:T}
\end{equation}$

Aplicando as equações \eqref{eq:x1.} a \eqref{eq:y2.} na equação \eqref{eq:T} e lançando mão das identidades trigonométricas:

- $sen(a) \cdot sen(b) = 1/2 \(cos(a-b)-cos(a+b)\)$
- $cos(a) \cdot cos(b) = 1/2 \(cos(a-b)+cos(a+b)\)$

É possível reduzir a expressão da energia cinética do sistema para:

$\begin{equation}
T = \frac{1}{2}\(m_1l_1\dot{q_1}^2 + m_2\(w_1^2\dot{q_1}^2+l_2^2 \dot{q_2}^2 + 2w_1l_2\dot{q_1}\dot{q_2}cos(q_1-q_2)\)\)
\label{eq:T1}
\end{equation}$

Já a energia potencial gravitacional está relacionada as variáveis $y_1$ e $y_2$ do sistema, sendo expressa a partir da definição $V = mgy$ por:

$\begin{equation*}
V = -y_1m_1g - y_2m_2g
\end{equation*}$

Aplicando as relações entre as coordenadas cartesianas e coordenadas gerais do sistema:

$\begin{equation}
V = -m_1gl_1cos(q_1) - m_2g\(w_1cos(q_1) + l_2cos(q_2)\)
\label{eq:V}
\end{equation}$

A lagrangeana do sistema, dada por $L = T-V$ é obtida subtraindo a equacao \eqref{eq:V} da \eqref{eq:T1}:

$\begin{equation}
L = \frac{1}{2}\(m_1l_1\dot{q_1}^2 + m_2\(w_1^2\dot{q_1}^2+l_2^2 \dot{q_2}^2 + 2w_1l_2\dot{q_1}\dot{q_2}cos(q_1-q_2)\)\) + m_1gl_1cos(q_1) + m_2g\(w_1cos(q_1) + l_2cos(q_2)\)
\label{eq:L}
\end{equation}$

Nota-se que a lagrangeana do sistema é composta por diversas funções não lineares, o que levará inevitavelmente a uma série de equações diferencias não lineares que descrevem o comportamento do sistema. Em geral o controle de sistema lineares é melhor documentado e mais simples de se implementar, portanto o escopo desse trabalho irá se restringir a realizar a análise de sistemas lineares. Para isso, torna-se necessário linearizar a lagrangeana. Conforme o descrito por [Svirin](https://math24.net/double-pendulum.html) a lagrangeana pode ser escrita de forma mais simples expandindo as não linearidades em uma série de Maclaurin a truncando a série até o termo quadrático. Assim os termos em cosseno podem ser simplificados para:

$$
\cos {\alpha _1} \approx 1 - \frac{{\alpha _1^2}}{2},\ \ \cos {\alpha _2} \approx 1 - \frac{{\alpha _2^2}}{2},\ \ \cos \left( {{\alpha _1} - {\alpha _2}} \right) \approx 1 - \frac{{{{\left( {{\alpha _1} - {\alpha _2}} \right)}^2}}}{2} \approx 1.
$$

A última aproximação foi feita considerando que o termo $(\alpha_1 - \alpha_2)^2$ resulta em um número muito pequeno, portanto pode ser desprezado.

Com estas considerações, a equação \eqref{eq:L} pode ser linearizada:

$\begin{equation}
L = \frac{1}{2}\(m_1l_1\dot{q_1}^2 + m_2\(w_1^2\dot{q_1}^2+l_2^2 \dot{q_2}^2 + 2w_1l_2\dot{q_1}\dot{q_2}\)\) + m_1gl_1\left(1-\frac{q_1^2}{2}\right) + m_2g\left(w_1\left(1-\frac{q_1^2}{2}\right) + l_2\left(1-\frac{q_2^2}{2}\right)\right)
\label{eq:Ll}
\end{equation}$

Obtendo as derivadas das coordendas gerais:

$\begin{equation}
\frac{\partial L}{\partial q_1} = - m1gl_1q_! - m_2gw_1q_1
\label{eq:dldq1}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial q_2} = - m_2gl_2q_2
\label{eq:dldq2}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial \dot{q_1}} = m_1l_1^2\dot{q_1} + m_2 w_1^2\dot{q_1} + m_2w_1l_2\dot{q_2}
\label{eq:dldq1.}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial \dot{q_2}} = m_2l_2^2\dot{q_2} + m_2w_1l_2\dot{q_1}
\label{eq:dldq2.}
\end{equation}$

Obtendo as derivadas temporais:

$\begin{equation}
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_1}}\right) = m_1l_1^2\ddot{q_1} + m_2w_1^2\ddot{q_1}+m_2w_1l_2\ddot{q_2}
\label{eq:dtdq1.}
\end{equation}$

$\begin{equation}
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_2}}\right) = m_2l_2^2\ddot{q_2} + m_2w_1l_2\ddot{q_1}
\label{eq:dtdq2.}
\end{equation}$

Prosseguindo com o método de Lagrange para obtenção das equações diferencias do sistema, aplica-se para as duas coordenadas generalizadas:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial \dot{q}} = 0
$$

O que leva a um sistema de duas equações após agrupar os termos:

$\begin{equation}
\left\\{
    \\begin{array}{*{20}{l}}
      {\ddot{q_1}\left(m_1l_1^2 + m_2w_1^2\right) + \ddot{q_2}\left(m_2w_1l_2\right) + q_1\left(m_1gl_1 + m_2gw_1\right) = 0} \\\\
      {\ddot{q_1}\left(m_2w_1l_2\right) + \ddot{q_2}\left(m_2l_2^2\right) + q_2\left(m_2gl_2\right) = 0}
    \\end{array}
  \right.
\label{eq:sis1}
\end{equation}$

Seja 

- $a = m_1l_1^2+m_2w_1^2$
- $b = m_2w_1l_2$
- $c = m_1gl_1 + m_2gw_1$
- $d = m_2w_1l_2$
- $e = m_2l_2^2$
- $f = m_2gl_2$

O sistema \eqref{eq:sis1} pode ser simplificado para:

$\begin{equation}
\left\\{
    \\begin{array}{*{20}{l}}
      {(a) \ddot{q_1} + (b) \ddot{q_2} + (c) q_1 = 0} \\\\
      {(d) \ddot{q_1} + (e) \ddot{q_2} + (f) q_2 = 0}
    \\end{array}
  \right.
\label{eq:sis1_simp}
\end{equation}$

Extraindo a matriz de coeficientes deste sistema é possível aplicar o método de Gauss-Jordan para resolve-lo. Como é um sistema homogêneo, é desnecessário considerar a matriz expandida.

$\begin{equation*}
    \\begin{pmatrix}
      a & b & c & 0 \\\\
      d & e & 0 & f \\\\
      0 & 0 & 0 & 0 \\\\
      0 & 0 & 0 & 0
    \\end{pmatrix}
\end{equation*}$

$L_1 \leftarrow 1/a \cdot L_1$

$\begin{equation*}
    \\begin{pmatrix}
      1 & b/a & c/a & 0 \\\\
      d & e & 0 & f \\\\
      0 & 0 & 0 & 0 \\\\
      0 & 0 & 0 & 0
    \\end{pmatrix}
\end{equation*}$

$L_2 \leftarrow L_2 - d \cdot L_1$

$\begin{equation*}
    \\begin{pmatrix}
      1 & b/a & c/a & 0 \\\\
      0 & e - (db)/a & -(dc)/a & f \\\\
      0 & 0 & 0 & 0 \\\\
      0 & 0 & 0 & 0
    \\end{pmatrix}
\end{equation*}$

$L_2 \leftarrow (e-(db)/a)^{-1} \cdot L_2$

$\begin{equation*}
    \\begin{pmatrix}
      1 & b/a & c/a & 0 \\\\
      0 & 1 & g & h \\\\
      0 & 0 & 0 & 0 \\\\
      0 & 0 & 0 & 0
    \\end{pmatrix}
\end{equation*}$

Onde:
- $g = -(dc)/a \cdot (e-(db)/a)^{-1}$ 
- $h = f \cdot (e-(db)/a)^{-1}$

$L_1 \leftarrow L_1 - b/a \cdot L_2$

$\begin{equation*}
    \\begin{pmatrix}
      1 & 0 & i & j \\\\
      0 & 1 & g & h \\\\
      0 & 0 & 0 & 0 \\\\
      0 & 0 & 0 & 0
    \\end{pmatrix}
\end{equation*}$

Onde:
- $i = c/a - (gb)/a$ 
- $j = -(hb)/a$

Assim o sistema de equações pode ser resolvido para $\ddot{q_1}$ e $\ddot{q_2}$ deixando $q_1$ e $q_2$ como variáveis livres:

$\begin{equation}
\left\\{
    \\begin{array}{*{20}{l}}
      {\ddot{q_1} = \alpha q_1 + \beta q_2} \\\\
      {\ddot{q_2} = \gamma q_1 + \delta q_2}
    \\end{array}
  \right.
\label{eq:sis1_solved}
\end{equation}$

Onde:
- $\alpha = -i$ 
- $\beta = -j$
- $\gamma = -g$
- $\delta = -h$

#Referencias
[1]: <https://www.koreascience.or.kr/article/CFKO199311920545505.pdf> Yamakawa et all. **A New Effective Learning Algorithm for a Neo Fuzzy Neuron Model** 
