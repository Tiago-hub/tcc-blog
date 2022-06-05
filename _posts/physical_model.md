---
title: 'Sistema Biarticulado'
excerpt: 'O sistema biarticulado é um sistema com dois graus de liberdade, muito semelhante ao pêndulo duplo. Uma descrição matemática das equações diferencias que regem esse sistema baseada na mecânica de Lagrange é descrita neste post.'
coverImage: '/assets/blog/dynamic-routing//Untitled%201.png'
date: '2021-11-16T05:35:07.322Z'
author:
  name: Tiago da Costa Ferreira
  picture: '/assets/blog/authors/tiago.png'
ogImage:
  url: '/assets/blog/dynamic-routing//Untitled%201.png'
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

Nota-se que a lagrangeana do sistema é composta por diversas funções não lineares, o que levará inevitavelmente a uma série de equações diferencias não lineares que descrevem o comportamento do sistema. Em geral o controle de sistema lineares é melhor documentado e mais simples de se implementar, porém em se tratando de análises angulares restringiria muito o problema em pequenas oscilações. Por isso optou-se por prosseguir com o modelo não linear.

Obtendo as derivadas das coordendas gerais:

$\begin{equation}
\frac{\partial L}{\partial q_1} = -w_1l_2\dot{q_1}\dot{q_2}sen(q_1-q_2)
-m_1gl_1sen(q_1) - m_2gw_1sen(q_1)
\label{eq:dldq1}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial q_2} = w_1l_2\dot{q_1}\dot{q_2}sen(q_1-q_2) -m_2l_2gsen(q_2)
\label{eq:dldq2}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial \dot{q_1}} = m_1l_1^2\dot{q_1} + m_2 w_1^2\dot{q_1} + w_1l_2\dot{q_2}cos(q_1-q_2)
\label{eq:dldq1.}
\end{equation}$

$\begin{equation}
\frac{\partial L}{\partial \dot{q_2}} = m_2l_2^2\dot{q_2} + w_1l_2\dot{q_1}cos(q_1-q_2)
\label{eq:dldq2.}
\end{equation}$

Obtendo as derivadas temporais:

$\begin{equation}
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_1}}\right) = \ddot{q_1}(m_1l_1^2 + m_2w_1^2) + m_2w_1l_2\ddot{q_2}cos(q_1-q_2) - m_2w_1l_2\dot{q_1}\dot{q_2}sen(q_1-q_2) + m_2w_1l_2\dot{q_2}^2sen(q_1-q_2)
\label{eq:dtdq1.}
\end{equation}$

$\begin{equation}
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_2}}\right) = m_2l_2^2\ddot{q_2} + m_2w_1l_2\ddot{q_1}cos(q_1-q_2) + m_2w_1l_2\dot{q_1}\dot{q_2}sen(q_1-q_2) - m_2w_1l_2\dot{q_1}^2sen(q_1-q_2)
\label{eq:dtdq2.}
\end{equation}$

Prosseguindo com o método de Lagrange para obtenção das equações diferencias do sistema, aplica-se para as duas coordenadas generalizadas:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial q} = Q_k
$$

Onde o lado direito da igualdade se refere as forças não conservativas presentes no sistema considerado. Para o caso proposto assume-se que há duas forças não conservativas atuando para cada coordenada generalizada que é o torque e a friccção no eixo de rotação.

Primeiro a partir da definição matemática, calcula-se a força devido ao torque. Uma força qualquer para ser convertida em coordenada generalizada deve-se aplicar a equação:

$$Q_i = \\displaystyle \sum \vec{F} \cdot \frac{\partial \vec{r}}{\partial q_i}$$

Onde $\vec{r}$ é o vetor que dá a posição do corpo sobre o qual a força age e $\vec{F}$ o vetor força.

Para a força que atua sobre o primeiro eixo:

$$Q_1 = \vec{F_1} \cdot \frac{\partial \vec{r_1}}{\partial q_1} + \vec{F_2} \cdot \frac{\partial \vec{r_2}}{\partial q_1}$$ 

Os vetores de coordenadas são dados por:

$$ \vec{r_1} = l_1 sen(q_1) \vec{i} - l_1 cos(q_1) \vec{j} $$


$$ \vec{r_2} = (w_1sen(q_1) + l_2sen(q_2)) \vec{i} - (w_1cos(q_1)+l_2cos(q_2)) \vec{j} $$

Enquanto os vetores de força são simplesmente o torque aplicado $T$ multiplicado pela distância do corpo até o eixo. Visto que os corpos são tratados como massas pontuais, é um modelo razoável de se utilizar.

$$ \vec{F_1} = \frac{T_1}{l_1cos(q_1)} \vec{i} + \frac{T_1}{l_1sen(q_1)} \vec{j}$$

$$ \vec{F_2} = \frac{T_2}{l_2cos(q_2)} \vec{i} + \frac{T_2}{l_1sen(q_2)} \vec{j}$$

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}}\right) - \frac{\partial L}{\partial \dot{q}} = T_q - B_q
$$

Tomando a derivada parcial das coordenadas generalizadas e aplicando a operação de produto escalar com a respectiva força, a força generalizada que atua sobre o primeiro eixo é dada por:

$$ Q_1 = 2T_1 + 2\frac{w_1}{l_2}T_2 $$

De forma análoga, a força que atua sobre o segundo eixo é:


$$Q_2 = \vec{F_1} \cdot \frac{\partial \vec{r_1}}{\partial q_2} + \vec{F_2} \cdot \frac{\partial \vec{r_2}}{\partial q_2} = 2T_2$$ 

Como [Cline](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_(Cline)/10%3A_Nonconservative_Systems/10.04%3A_Rayleighs_Dissipation_Function) explica, em se tratando de forças de fricção aplicadas em um sistema Lagrangiano, uma boa aproximação é utilizar uma função de dissipação de <em>Rayleigh's</em>. Como as partículas consideradas nesse sistema pouco exercem influência direta uma sobre a outra, as forças de acoplamento entre elas podem ser desprezadas no modelo de forças de dissipação, levando a força de atrito a poder ser expressa como dependendo linearmente da velocidade multiplicada por um coeficiente de atrito, aqui denominado $\lambda$. Portanto adota-se $B$ como sendo a força de atrito em coordenadas generalizadas, que é dada por:

$$
B_q = \lambda_q\dot{q}
$$

Assim um sistema de duas equações pode ser definido, uma para cada coordenada generalizada

$\begin{equation}
\left\\{
    \\begin{array}{*{20}{l}}
      {\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_1}}\right) - \frac{\partial L}{\partial \dot{q_1}} = 2T_1 + 2\frac{w_1}{l2}T_2 - \lambda_{q_1}\dot{q_1} }\\\\
      {\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q_2}}\right) - \frac{\partial L}{\partial \dot{q_2}} = 2T_2 - \lambda_{q_2}\dot{q_2}}
    \\end{array}
  \right.
\label{eq:sis1}
\end{equation}$


Aplicando as derivadas espaciais e temporais obtidas anteriormente a equação \eqref{eq:sis1} obtém-se um sistema de duas equações, do qual pode-se resolver para as duas acelerações $\ddot{q_1}$ e $\ddot{q_2}$ obtendo-se as equações de movimento do pêndulo duplo.

Devido a ser trabalhoso o desenvolvimento de tal solução, utilizou-se o software MATLAB que permite a solução de equações algébricas. O desenvolvimento pode ser acompanhado AQUI [Colocar depois o codigo no github]

De posse das equações de movimento do sistema, é possível realizar simulações computacionais com este e coletar dados sobre possíveis sistemas de controle. 

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head>
   <!--
This HTML was auto-generated from MATLAB code.
To make changes, update the MATLAB code and republish this document.
      --><title>equations_of_motion</title><meta name="generator" content="MATLAB 9.5"><link rel="schema.DC" href="http://purl.org/dc/elements/1.1/"><meta name="DC.date" content="2022-06-05"><meta name="DC.source" content="equations_of_motion.m"><style type="text/css">
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}:focus{outine:0}ins{text-decoration:none}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}

html { min-height:100%; margin-bottom:1px; }
html body { height:100%; margin:0px; font-family:Arial, Helvetica, sans-serif; font-size:10px; color:#000; line-height:140%; background:#fff none; overflow-y:scroll; }
html body td { vertical-align:top; text-align:left; }

h1 { padding:0px; margin:0px 0px 25px; font-family:Arial, Helvetica, sans-serif; font-size:1.5em; color:#d55000; line-height:100%; font-weight:normal; }
h2 { padding:0px; margin:0px 0px 8px; font-family:Arial, Helvetica, sans-serif; font-size:1.2em; color:#000; font-weight:bold; line-height:140%; border-bottom:1px solid #d6d4d4; display:block; }
h3 { padding:0px; margin:0px 0px 5px; font-family:Arial, Helvetica, sans-serif; font-size:1.1em; color:#000; font-weight:bold; line-height:140%; }

a { color:#005fce; text-decoration:none; }
a:hover { color:#005fce; text-decoration:underline; }
a:visited { color:#004aa0; text-decoration:none; }

p { padding:0px; margin:0px 0px 20px; }
img { padding:0px; margin:0px 0px 20px; border:none; }
p img, pre img, tt img, li img, h1 img, h2 img { margin-bottom:0px; } 

ul { padding:0px; margin:0px 0px 20px 23px; list-style:square; }
ul li { padding:0px; margin:0px 0px 7px 0px; }
ul li ul { padding:5px 0px 0px; margin:0px 0px 7px 23px; }
ul li ol li { list-style:decimal; }
ol { padding:0px; margin:0px 0px 20px 0px; list-style:decimal; }
ol li { padding:0px; margin:0px 0px 7px 23px; list-style-type:decimal; }
ol li ol { padding:5px 0px 0px; margin:0px 0px 7px 0px; }
ol li ol li { list-style-type:lower-alpha; }
ol li ul { padding-top:7px; }
ol li ul li { list-style:square; }

.content { font-size:1.2em; line-height:140%; padding: 20px; }

pre, code { font-size:12px; }
tt { font-size: 1.2em; }
pre { margin:0px 0px 20px; }
pre.codeinput { padding:10px; border:1px solid #d3d3d3; background:#f7f7f7; }
pre.codeoutput { padding:10px 11px; margin:0px 0px 20px; color:#4c4c4c; }
pre.error { color:red; }

@media print { pre.codeinput, pre.codeoutput { word-wrap:break-word; width:100%; } }

span.keyword { color:#0000FF }
span.comment { color:#228B22 }
span.string { color:#A020F0 }
span.untermstring { color:#B20000 }
span.syscmd { color:#B28C00 }

.footer { width:auto; padding:10px 0px; margin:25px 0px 0px; border-top:1px dotted #878787; font-size:0.8em; line-height:140%; font-style:italic; color:#878787; text-align:left; float:none; }
.footer p { margin:0px; }
.footer a { color:#878787; }
.footer a:hover { color:#878787; text-decoration:underline; }
.footer a:visited { color:#878787; }

table th { padding:7px 5px; text-align:left; vertical-align:middle; border: 1px solid #d6d4d4; font-weight:bold; }
table td { padding:7px 5px; text-align:left; vertical-align:top; border:1px solid #d6d4d4; }





  </style></head><body><div class="content"><pre class="codeinput">clear <span class="string">all</span>
syms <span class="string">x1</span> <span class="string">y1</span> <span class="string">x2</span> <span class="string">y2</span>
syms <span class="string">x1p</span> <span class="string">y1p</span> <span class="string">x2p</span> <span class="string">y2p</span>
syms <span class="string">q1</span> <span class="string">q2</span> <span class="string">q1p</span> <span class="string">q2p</span>
syms <span class="string">m1</span> <span class="string">m2</span> <span class="string">l1</span> <span class="string">l2</span> <span class="string">w1</span> <span class="string">w2</span>
syms <span class="string">g</span>
syms <span class="string">L</span>

T = 1/2*(m1*l1^2*q1p^2 + m2*(w1^2*q1p^2 + l2^2*q2p^2 + 2*w1*l2*q1p*q2p*cos(q1-q2)));
V = -m1*g*l1*cos(q1) - m2*g*(w1*cos(q1)+l2*cos(q2));

L = T - V;

display(<span class="string">"L = "</span>);
display(L);

dLdq1 = diff(L,q1);
dLdq2 = diff(L,q2);
dLdq1p = diff(L,q1p);
dLdq2p = diff(L,q2p);
</pre><pre class="codeoutput">    "L = "

 
L =
 
(m2*(l2^2*q2p^2 + 2*cos(q1 - q2)*l2*q1p*q2p*w1 + q1p^2*w1^2))/2 + (l1^2*m1*q1p^2)/2 + g*m2*(l2*cos(q2) + w1*cos(q1)) + g*l1*m1*cos(q1)
 
</pre><pre class="codeinput">syms <span class="string">q1p(t)</span> <span class="string">q2p(t)</span> <span class="string">q1(t)</span> <span class="string">q2(t)</span>
dLdq1p = m1*q1p(t)*l1^2 + (m2*(2*q1p(t)*w1^2 + 2*l2*q2p(t)*cos(q1 - q2)*w1))/2;

dLdq2p = (m2*(2*q2p(t)*l2^2 + 2*q1p(t)*w1*cos(q1 - q2)*l2))/2;

dtdLdq1p = diff(dLdq1p,t);
dtdLdq2p = diff(dLdq2p,t);
</pre><pre class="codeinput">syms <span class="string">x1</span> <span class="string">x2</span> <span class="string">x3</span> <span class="string">x4</span>
syms <span class="string">x1p</span> <span class="string">y1p</span> <span class="string">x2p</span> <span class="string">y2p</span>
syms <span class="string">q1</span> <span class="string">q2</span> <span class="string">q1p</span> <span class="string">q2p</span> <span class="string">q1pp</span> <span class="string">q2pp</span>
syms <span class="string">m1</span> <span class="string">m2</span> <span class="string">l1</span> <span class="string">l2</span> <span class="string">w1</span> <span class="string">w2</span>
syms <span class="string">g</span>
syms <span class="string">L</span>
syms <span class="string">tal1</span> <span class="string">tal2</span> <span class="string">b1</span> <span class="string">b2</span>

<span class="comment">%solution drive by hand (need to do revision on web page)</span>
dtdLdq1p = m1*l1^2*q1pp + m2*w1^2*q1pp + m2*w1*l2*q2pp*cos(q1-q2) - m2*w1*l2*q2p*sin(q1-q2)*q1p + m2*w1*l2*q2p*sin(q1-q2)*q2p;
dtdLdq2p = m2*l2^2*q2pp + m2*w1*l2*q1pp*cos(q1-q2) - m2*w1*l2*q1p*sin(q1-q2)*q1p + m2*w1*l2*q1p*sin(q1-q2)*q2p;
q_vec = [q1,q1p,q2,q2p];
x_vec = [x1,x2,x3,x4];

dLdq1 = subs(dLdq1,q_vec,x_vec);
dLdq2 = subs(dLdq2,q_vec,x_vec);
dtdLdq1p = subs(dtdLdq1p,q_vec,x_vec);
dtdLdq2p = subs(dtdLdq2p,q_vec,x_vec);

eqns = [dtdLdq1p - dLdq1 == 2*tal1+2*(w1/l1)*tal2-b1*x2 ; dtdLdq2p - dLdq2 == 2*tal2-b2*x4];
S = solve(eqns,[q1pp;q2pp]);
display(<span class="string">"q1pp"</span>);
S.q1pp
display(<span class="string">"q2pp"</span>);
S.q2pp
</pre><pre class="codeoutput">    "q1pp"

 
ans =
 
-(b1*l1*l2*x2 - 2*l2*tal2*w1 - 2*l1*l2*tal1 + 2*l1*tal2*w1*cos(x1 - x3) - b2*l1*w1*x4*cos(x1 - x3) + g*l1^2*l2*m1*sin(x1) + g*l1*l2*m2*w1*sin(x1) + l1*l2^2*m2*w1*x4^2*sin(x1 - x3) - g*l1*l2*m2*w1*cos(x1 - x3)*sin(x3) + l1*l2*m2*w1^2*x2^2*cos(x1 - x3)*sin(x1 - x3))/(l1*l2*(l1^2*m1 + m2*w1^2 - m2*w1^2*cos(x1 - x3)^2))
 
    "q2pp"

 
ans =
 
(2*l1^3*m1*tal2 - b2*l1^3*m1*x4 + 2*l1*m2*tal2*w1^2 - 2*l2*m2*tal2*w1^2*cos(x1 - x3) - b2*l1*m2*w1^2*x4 - g*l1*l2*m2^2*w1^2*sin(x3) - 2*l1*l2*m2*tal1*w1*cos(x1 - x3) - g*l1^3*l2*m1*m2*sin(x3) + l1*l2*m2^2*w1^3*x2^2*sin(x1 - x3) + b1*l1*l2*m2*w1*x2*cos(x1 - x3) + g*l1*l2*m2^2*w1^2*cos(x1 - x3)*sin(x1) + l1*l2^2*m2^2*w1^2*x4^2*cos(x1 - x3)*sin(x1 - x3) + l1^3*l2*m1*m2*w1*x2^2*sin(x1 - x3) + g*l1^2*l2*m1*m2*w1*cos(x1 - x3)*sin(x1))/(l1*l2^2*m2*(l1^2*m1 + m2*w1^2 - m2*w1^2*cos(x1 - x3)^2))
 
</pre><p class="footer"><br><a href="https://www.mathworks.com/products/matlab/">Published with MATLAB® R2018b</a><br></p></div>
