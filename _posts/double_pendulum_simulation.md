---
title: 'Simulação do pêndulo duplo'
excerpt: 'O pêndulo duplo é um modelo físico amplamente estudado. Este trabalho pretende utilizar da linguagem de programação python para realizar a simulação do comportamento de um pêndulo duplo. A ideia é de que sirva de base para simular o movimento simplificado de uma perna humana visto a direta semelhança entre os sistemas.'
coverImage: '/assets/blog/double-pendulum-simulation/cover-image.png'
date: '2022-03-16T05:35:07.322Z'
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

Portanto uma classe foi criada para representar o modelo físico do pêndulo. Esta recebe em seu construtor os parâmetros físicos do pêndulo em conjunto com um vetor contendo o torque aplicado a cada eixo ao longo do tempo o qual deseja-se realizar a simulação do comportamento do pêndulo.

    class double_pendulum:
        def __init__(self, m1, m2, l1, l2, w1, w2, q1=0, q2=0, b1=0, b2=0, a1=0, a2=0, tal1 = [], tal2 = []):
        
A classe possui um método que retorna a resposta das equações de movimento no formato esperado pela função *odeint*, que é um vetor no formato:

$$
\frac{d\vec{x}}{dt} = \vec{F(x)}
$$

Onde $\vec{x}$ é o chamado vetor de estados que é composto pelas variáveis de estado. Seja $x_1$ o ângulo do primeiro eixo do modelo (eixo mais acima) $q_1$ e $x_3$ o ângulo do segundo eixo $q_2$. O vetor $\vec{x}$ então será:

$\begin{equation}
    \vec{x} = 
    \left[
        \\begin{array}{*{20}{l}}
        {x_1}\\\\
        {x_2}\\\\
        {x_3}\\\\
        {x_4}
        \\end{array}
    \right] = \left[
    \\begin{array}{}
        {q_1}\\\\
        {\dot{x_1}}\\\\
        {q_2}\\\\
        {\dot{x_3}}
    \\end{array}
    \right]
\end{equation}$

O vetor $\vec{F(x)}$ é um vetor que representa uma função das variáveis de estado. Em geral a primeira e terceira entrada são apenas igual a segunda e quarta entrada de $\vec{x}$ pela forma como ele é definido. A equação retornada pela classe então tem a forma:

$\begin{equation}
    \left[
        \\begin{array}{*{20}{l}}
        {\dot{x_1}}\\\\
        {\dot{x_2}}\\\\
        {\dot{x_3}}\\\\
        {\dot{x_4}}
        \\end{array}
    \right] = \left[
    \\begin{array}{}
        {x2}\\\\
        {f_1(\vec{x})}\\\\
        {x4}\\\\
        {f_2(\vec{x})}
    \\end{array}
    \right]
\end{equation}$

    def dpend_dt(self,x, t):
        ...
        dxdt = np.array([
            x2,
            f(x1,x2,x3,x4,t)
            x4,
            f(x1,x2,x3,x4,t)
            ])
        return dxdt

# Simulação do pêndulo com movimento livre

Utilizando os recursos de animação do python foi possível gerar um arquivo .gif que ilustra o comportamento do pêndulo para o modelo desenvolvido quando em movimento livre. O programa permite definir as condições iniciais e os parâmetros físicos. Neste primeiro momento os seguintes parâmetros foram considerados:

$$m_1 = 0.615$$
$$m_2 = 0.249$$
$$w_1 = 0.540$$
$$w_2 = 0.420$$
$$l_1 = w_1$$
$$l_2 = w_2$$

Onde as grandezas mencionadas referem-se às mesmas desenvolvidas no [modelo matemático](https://tcc-blog.vercel.app/posts/physical_model). Ressalta-se que o pêndulo simulado aqui possui o centro de massa localizado no final de suas hastes e nenhum torque externo será aplicado ao eixo. Além disso, as condições iniciais são:

$$q_1(0) = 120°$$
$$q_2(0) = 15°$$
        
Por fim para essa primeira simulação o coeficiente de atrito é nulo. Os resultados obtidos podem ser observados na Figura 1

![](/assets/blog/double-pendulum-simulation/pen.gif)
Figura 1: Simulação do movimento livre do pêndulo duplo. Fonte: Autor

É possível observar que o pêndulo tem um movimento caótico e que mesmo tendo uma natureza oscilatória, pouco se repete. Outros casos podem ser simulados e comparados, como por exemplo adicionar um coeficiente de atrito aos eixos do pêndulo e observar como o movimento é freado ao longo do tempo, aproximando mais de um comportamento real conforme a Figura 2 ilustra. Inclusive é interessante ressaltar como mais para o fim do movimento, conforme o sistema perde energia ele tende a se comportar como um pêndulo simples.

![](/assets/blog/double-pendulum-simulation/pen_friction.gif)
Figura 2: Simulação do movimento livre do pêndulo duplo com atrito. Fonte: Autor

O último dos testes para nosso modelo de pêndulo é submeter o mesmo a um torque externo pois a intenção é aplicar um torque que seja capaz de reproduzir um movimento de caminhar em nosso modelo. Para isso um torque unitário será aplicado ao primeiro eixo do pêndulo, partindo de uma posiçao inicial onde ambos os ângulos são zerados. O resultado pode ser observado na figura 3. É possível ver inclusive que o torque não é o bastante para vencer o peso das massas e iniciar um movimento de rotação.

![](/assets/blog/double-pendulum-simulation/pen_torque.gif)
Figura 3: Simulação do movimento do pêndulo duplo com torque unitário aplicado ao primeiro eixo. Fonte: Autor
