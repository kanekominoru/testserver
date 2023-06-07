const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

if (require.main === module) {
  main();
}

function main () {
  try {
    const router = express();
    // const fs = require('fs');
    // const server = require('https').createServer({
    //     key: fs.readFileSync('./privatekey.pem'),
    //     cert: fs.readFileSync('./cert.pem'),
    // }, router);
    const corsOptions = {
      origin: 'https://bbopu8pthsesrij6hl1sna.on.drv.tw',
      optionsSuccessStatus: 200 
    }
    router.use(cors(corsOptions))
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(async (req, res, next) => {
      try {
        const chunks = await new Promise((resolve, reject) => {
          const chunks = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => resolve(chunks));
          req.on('error', reject);
          
        })
        res.set('Access-Control-Allow-Origin', 'https://bbopu8pthsesrij6hl1sna.on.drv.tw');
        const buffer = Buffer.concat(chunks)
        console.log(buffer.toString());
        outputCsv();
        res.send({
          method: req.method,
          url: req.originalUrl,
          query: req.query,
          headers: req.headers,
          body: buffer.toString(),
        });
        
      } catch (err) {
        next(err);
      }
    })
    
    const port = parseInt(process.env.PORT || '3000', 10)

    router.listen(port, () => {
      console.info(`Listening on ${port}`);
    })
  } catch (err) {
    console.error(err);
  }
}

const outputCsv = () =>{
  const Fs  = require('fs');
  const { stringify } = require("csv-stringify/sync");
  const Iconv = require('iconv-lite');

  // OSがWindowsなら"USERPROFILE", Mac, Linuxは"HOME"を参照
  var dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
  var dir_desktop = require("path").join(dir_home, "Desktop");

  let contents = [
      { "年齢": "10", "名前": 'イチロー' },
      { "年齢": "20", "名前": 'ジロー' },
      { "年齢": "30", "名前": 'サブロー' },
  ];
  
  // カンマ区切りへ変換する。
  const csvString = stringify(contents, {
      header: true,
      quoted_string: true,
  });
  
  // Shift_JSIへ変換する。
  const csvStringSjis = Iconv.encode(csvString, 'Shift_JIS');
  
  // CSVファイルを出力する。
  Fs.writeFileSync(`${dir_desktop}/result.txt`, csvStringSjis);
}