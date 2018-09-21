import axios from "axios";
import config  from "../../../config";

const BASEURL= "https://api.darksky.net/forecast/";
const APIKEY = config.API_KEY