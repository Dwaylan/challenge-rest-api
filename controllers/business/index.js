const express = require("express");
const mysql = require("mysql");
const pool = require("../../sql/connection");

const list = (req, res) => {
  pool.query(`SELECT * FROM Business`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

const show = (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM Business WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw new Error(err);
    }
    return res.json(rows);
  });
};

module.exports = { list, show };
