---
title: 'Considerações sobre caminhar humano'
excerpt: 'O caminhar humano é alvo de diversos estudos afim de detalhar seu funcionamento. Este post visa fazer algumas considerações relevantes sobre o mesmo'
coverImage: '/assets/blog/human_walk/cover.jpg'
date: '2022-05-30T05:35:07.322Z'
author:
  name: Tiago da Costa Ferreira
  picture: '/assets/blog/authors/tiago.png'
ogImage:
  url: '/assets/blog/human_walk/cover.jpg'
---

# Introdução

O movimento de caminhar foi alvo de inúmeros estudos ao longo da história humana. Entender como um movimento funciona e quais mecanismos estão por trás dele é a chave para ser capaz de reproduzi-lo. Contudo o corpo humano é um organismo complexo e o caminhar apresenta variações entre cada sujeito e até mesmo na própria pessoa. O terreno, como o último movimento terminou, fadiga e inúmeros outros fatores contribuem para que nenhum passo que damos seja exatamente igual ao anterior. 

Três campos de pesquisa tem particular expertise na descrição da marcha humana, sendo eles a Cinesiologia, Biomecânica e Fisioterapia. A Cinesiologia visa analisar o caminhar como uma "sequência de ações coordenadas dos segmentos articulares de membros superiores, inferiores e tronco, compondo assim um movimento altamente complexo" [Salim](http://clyde.dr.ufu.br/bitstream/123456789/22545/1/DesenvolvimentoSistemaControle). Já para a Biomecânica, o caminhar depende da dinâmica entre o sistema motor e forças externas, seria resultado por exemplo da interação entre as forças produzidas pela dilatação ou contração de músculos com forças de atrito e gravitacionais. Por fim, para a Fisioterapia, a marcha é um dos mais importantes objetivos a se atingir durante um tratamento, sendo um objeto de estudo muito relevante o qual toda a complexidade deve ser compreendida. 

# Histórico do Estudo da Marcha Humana

De acordo com [Paul](https://doi.org/10.1080/1463922051233\1329464), um dos primeiros pesquisadores interessados em estudar o caminhar humano foi Leonardo da Vinci que utilizando o seu vasto conhecimento anatômico e observação para compreender as mecânicas por trás deste movimento. Contudo a falta de instrumentos adequados na época para adquirir e traçar todas as carecterísticas do andar limitaram o desenvolvimento deste campo de conhecimento.

Apenas por volta de 1830, com o trabalho dos irmãos Weber o caminhar humano pode ser caracterizado de forma quantitativa. Utilizando um telescópio calibrado para medir pontos específicos do corpo enquanto produzia o movimento de caminhada, foi posível a começar a obter alguns paramêtros elementares da marcha como o comprimento e cadência do passo.

O próximo avanço viria com Muybridge em 1887 utilizando técnicas de cinematografia. Ele obteve uma coleção de fotografias da marcha humana, porém com análises restritas ao plano sagital. Para isso este lançou mão de câmeras fotográficas enfileiradas e conectadas entre si, de modo que os disparos ocorriam sucessivamente. Muybridge catalogou diversos movimentos, um dos caminhares registrado por ele pode ser visto na figura 1.

![](/assets/blog/human_walk/muybridge_walk.png)
Figura 1: Caminhar fotografado por Muybridge

Desde então técnicas utilizando fotografias foram sendo refinidas, até serem complementadas por técnicas de vídeo e por fim utilizando sensores eletrônicos. Esse avanço tecnológico possibilitou a total caracterização do movimento humano permitindo a coleta de dados sobre os ângulos, acelerações, e torques nos três planos de todas as articulações.
 
# Caracterização da Marcha Humana

A marcha humana é analisada a partir dos três planos de referência para a anatomia humana, o Frontal, Sagital e Transversal [Salim](http://clyde.dr.ufu.br/bitstream/123456789/22545/1/DesenvolvimentoSistemaControle).

Alguns elementos básicos podem ser definidos para este movimento apesar de sua grande variação entre cada pessoa. A cinemática busca descrever o fenômendo da marcha utilizando-se tanto de obsevação visual quanto registro de sensores modelando o corpo como um sistema multissegmentar e ignorando as forças produzidas pelos movimentos. A análise cinética, por sua vez, envolve as causas do movimento, ou seja, analisa as forças que atuam para que o movimento ocorra.

Com o intuito de padronizar então a marcha, e por sua própria natureza de ser um movimento repetitivo, é possível defini-la como um ciclo, chamado ciclo da marcha. O ciclo de marcha pode ser definido como o movimento "em que o corpo humano, com o intuito de realizar um avanço à frente, dispõe dos membros inferiores como um apoio, enquanto o outro membro avança para uma nova posição de apoio e assim sucessivamente"[Salim](http://clyde.dr.ufu.br/bitstream/123456789/22545/1/DesenvolvimentoSistemaControle), conforme mostra a figura 2:
![](/assets/blog/human_walk/ciclo_marcha.png)
Figura 2: Ciclo de marcha [4]

O ciclo possui duas fases bem distintas, uma fase de Apoio e outra de Balanço. Durante o período de Apoio, que equivale aproximadamente a 60% do ciclo, o membro inferior sendo analisado está em contato com o solo sendo o ponto de apoio para que o outro se mova no ar. No período de Balanço essa relação se inverte e o membro em questão se move no ar para uma nova posição de contat com o solo. Essas fases distintas da marcha estão destacadas na figura 3 onde o vermelho ressalta o período de Apoio e o azul o de Balanço.

 ![](/assets/blog/human_walk/ciclo_marcha_apoio_balanco.png)
Figura 3: Ciclo de marcha [4]

O ciclo pode ser subdividido em outras partes e analisado mais a fundo levando em consideração como cada articulação, musculatura e osso atua para transferir de maneira efetiva os momentos e forças gerados durante este, mas isso foge ao escopo deste trabalho. Para mais detalhes o trabalho de [Salim](http://clyde.dr.ufu.br/bitstream/123456789/22545/1/DesenvolvimentoSistemaControle) pode ser consultado. Contudo vale ressaltar que o membro quando atuando na fase de apoio utiliza de toda a complexidade e graus de liberdade da perna humana para manter o equilíbrio, visto que todo o peso do corpo mais as forças resultantes da última passada estão sendo transferidos integralmente para este. Portanto qualquer modelo para simular o comportamento da perna humana encontrará dificuldades em manter uma estabilidade e equilíbrio, dada a dificuldade em replicar o complexo movimento que as articulações humanas permitem.

## Medidas de Distância na Marcha

Durante a marcha, algumas distâncias podem ser definidas. A passada ou comprimento da marcha, corresponde ao comprimento das fases de apoio e balanço, ou seja, o contato consecutivo do mesmo membro membro com o solo. O passo por sua vez corresponde à distância entre os mesmos eventos ocorrendo com pés distintos. A largura do passo é a distância lateral entre os contatos consecutivos dos dois membros. Além disso há o ângulo de abertura dos pés em relação ao trajeto. A figura 4 ilustra essas medidas.

 ![](/assets/blog/human_walk/medidas_marcha.png)
Figura 4: Parâmetros de distância da marcha humana [1]

Os parâmetros de distância relacionam-se com parâmetros de velocidade e medindo-se o tempo para percorrer tais distâncias é possível definir tais grandezas. A velocidade de uma marcha corresponde à distância percorrida por unidade de tempo, enquanto a cadência de passos é definida como a quantidade de passos por unidade de tempo[4].

## Parâmetros da Marcha

Existem vários parâmetros relacionados à marcha humana. Geralmente estes são expressos em função da porcentagem do ciclo da marcha. Destacam-se o deslocamento angular das articulações, o momento gerado por tal deslocamento, a força de reação do solo e a variação do centro de massa do corpo. 

# Comportamento de articulações durante a marcha

Para o escopo deste trabalho, o foco está em como ocorre a variação angular das articulações durante a marcha humana. Este movimento já é bem documentado em literatura e aqui será detalhado apenas os movimentos do quadril e joelho visto que o objetivo é emular o movimento com um pêndulo duplo, portanto apenas duas articulações possuem equivalência.

A articulação do quadril começa o ciclo (quando ocorre o primeiro contato com o solo) com uma abertura de 30° que irá diminuir até zerar por volta de 35% do ciclo. Então até cerca de metade do ciclo, o ângulo tem uma abertura negativa indo até cerca de -10°. Então a angulação retorna a ter um crescimento positivo até uma estabilização por volta de 30° novamente com um leve sobressinal pouco antes da conclusão do movimento. A figura 5 mostra esse comportamento.

 ![](/assets/blog/human_walk/quadril_angulo.png)
Figura 5: Desenvolvimento angular da articulação do quadril durante o ciclo de marcha [1]

A articulação do joelho tem um movimento mais complexo, justamente por estar bem no meio de todo o movimento, tendo de absorver forças geradas pelo peso do corpo durante a troca do membro de apoio. Observa-se que a grosso modo o movimento é constituído de três concavidades bem semelhantes a funções de segundo grau. As concavidades formam uma sequência de cume, vale e cume novamente. O primeiro cume tme seu topo por volta de 20° e ocorre por volta de 15% da marcha. O vale que o segue tem mínimo por volta de 5° em 40% do movimento. Por fim o último cume do movimento ocorre por volta de 60° em 75% do movimento. A partir daí o ângulo gradualmente diminui de volta ao seu valor inicial em torno de 5%. A figura 6 ilustra esse comportamento.

 ![](/assets/blog/human_walk/joelho_angulo.png)
Figura 6: Desenvolvimento angular da articulação do joelho durante o ciclo de marcha [1]

# Referencias
- [1]: Salim, Vitor Vieira. **Desenvolvimento de um sistema de controle sem marcas para uma estrutura de reabilitação da marcha humana**. Programa de pós-graduação da Universidade Federal de Uberlândia. <http://clyde.dr.ufu.br/bitstream/123456789/22545/1/DesenvolvimentoSistemaControle> 
- [2]: PAUL J. P. **The history of musculoskeletal modelling in human gait. Theoretical Issues in Ergonomics Science.** 6:3-4, 217-224. 2005. <https://doi.org/10.1080/14639220512331329464>
- [3]: Muybridge, E. **The Human Figure in Motion. An Electrophotographic Investigation of Consecutive Phases of Muscular Actions**. <https://nucius.org/muybridge-the-human-figure-in-motion/eadweard-muybridge-the-human-figure-in-motion-serienaufnahmen-1901-1907/>
- [4] Vaughan, C., Davis, B. & O'Conner, J.,. **Dynamics of Human Gait**. 2nd ed. Cape
Town: Kiboho publishers. 
