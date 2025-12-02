O jogo que vou fazer é similar ao minijogo, FUT Draft do EA FC, em que você tem que montar um time de futebol baseado em escolhas aleatórias, valorizando o entrosamento de seu time, escolhendo jogadores de nações iguais ou de times iguais ou de mesma liga, enquanto ainda tenta escolher os melhores jogadores do mundo.

A mecânica básica do jogo é aparecer 5 jogadores na tela de modo aleatório e você escolhe o jogador que irá agregar mais ao seu time, seja no entrosamento ou por causa de seu "overall". Todo jogador tem seu: nome, posição, overall (classificação), time, liga, país e sua foto.

Para fazer as cartas dos jogadores, irei fazer um arquivo em JavaScript, separado do principal, que será uma espécie de banco de dados, em que terá cerca de X jogadores, com suas informações e sua imagem.

Para calcular o entrosamento, cada posição do time terá conexões com jogadores adjacentes, e estas podem ser: ruins(vermelhas), em que os jogadores não compartilham nenhuma coisa em comum; médias(amarelas), em que os jogadores compartilham ou a liga ou o país em comum; boas(verdes), em que os jogadores compartilham ou o mesmo time ou são de liga e país igual. 

Para fazer isso, farei uma função que itera sobre cada jogador e olhe seus vizinhos diretos, incrementando ou decrescendo o entrosamento conforme suas ligações.

Entrando no site, o usuário faz o login, com nome de usuário e senha, e faz seu avatar, que será uma camisa de time.

Depois que o usuário acaba de escolher seu time, ele pode tentar entrar no ranking. 

