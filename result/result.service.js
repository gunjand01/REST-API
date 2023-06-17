const pool=require("../../config/database.js");
module.exports={
    createresult: (data, callBack) => {
        pool.query(
            `insert into t2(reg_no, result)
            values(?,?)`,
            [
                data.reg_no,
                data.result,
            ],
            (errors, results, fields) => {
                if(errors){
                    return callBack(errors);
                }
                return callBack(null, results);
            }
        );
    },
    getresult: callBack => {
            pool.query(
                `select reg_no,result from t2`,
                [],
                (errors, results, fields) => {
                    if (errors) {
                        return callBack(errors);
                    }
                    return callBack(null, results);
                }
            );

        },
        updateresult: (data, callBack) => {
        pool.query(
            `update t1 set firstname=?, lastname=?, gender=?, email=?, password=?, number=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteresult: (data, callBack) => {
        pool.query(
            `delete from t1 where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}