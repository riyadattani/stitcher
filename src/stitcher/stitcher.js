import fetch from 'node-fetch'
import "regenerator-runtime/runtime.js";

export const stitcher = async (urls, getURL) => {
  try {
    return (await Promise.all(urls.map(getURL))).join("")
  } catch (err) {
    return Promise.reject(`An error occurred when stitching the urls "${err.message}"`)
  }
}

export const getURL = async url => {
  try {
    return Promise.resolve((await fetch(url)).text())
  } catch (err) {
    return new Error(`An error occurred when getting a url "${err.message}"`)
  }
}