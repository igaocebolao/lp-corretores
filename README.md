# lp-corretores


Agora é só:

Abrir o cPanel da hospedagem
Ir no Gerenciador de Arquivos
Entrar na pasta public_html
Fazer upload de todo o conteúdo de dentro da pasta dist (não a pasta em si, o conteúdo dela)

Se tiver acesso FTP, é a mesma lógica — aponta pra public_html e sobe o conteúdo da dist.

Só que tem um porém, a pasta dist tem uma estrutura client e server — isso indica que o projeto foi buildado como SSR (Server-Side Rendering), não como um site estático simples. Isso complica um pouco, porque não dá pra subir direto no cPanel como HTML estático, precisaria de um servidor Node.js rodando.
Teria que confirmar, se têm um servidor Node, VPS, ou usam alguma plataforma como Vercel ou Netlify. Isso vai definir o caminho certo pra subir.
