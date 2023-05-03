import Hapi from "@hapi/hapi"
const PORT = 8000

import routes from "../router/index.js";

const init = async () => {

  const server = Hapi.server({
    port: PORT,
    host: 'localhost'
  })

  server.route(routes)

  await server.start()
  console.log('Server sudah berjalan di %s', server.info.uri);
}

init()