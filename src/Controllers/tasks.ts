import connectDB from '../DB/connect';

export const getAll = async (request, response) => {
  connectDB.query(
    `SELECT * FROM public."task" ORDER BY id ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

export const getById = (request, response) => {
  const id = parseInt(request.params.id);

  connectDB.query(
    `SELECT * FROM public."task" WHERE id = ${id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows[0]);
    }
  );
};

export const create = (request, response) => {
  const { name, description, create_at, due_date, end_at } = request.body;

  connectDB.query(
    `INSERT INTO public."task" ("name", "description", "create_at", "due_date", "end_at")
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [name, description, create_at, due_date, end_at],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`新規タスクを登録しました`);
    }
  );
};

export const updateById = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, description } = request.body;

  connectDB.query(
    `UPDATE public."task" SET "name" = $1, "description" = $2 WHERE id = ${id}`,
    [name, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`タスクID${id}の情報を更新しました`);
    }
  );
};

export const deleteById = (request, response) => {
  const id = parseInt(request.params.id)

  connectDB.query(`DELETE FROM public."task" WHERE id = ${id}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`タスクID${id}を削除しました`)
  })
}
