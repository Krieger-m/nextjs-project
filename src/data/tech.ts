import sql from 'better-sqlite3';


const db = sql('technologies-test.db')


export async function getTech(){
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    return db.prepare('SELECT * FROM technologies').all();
}