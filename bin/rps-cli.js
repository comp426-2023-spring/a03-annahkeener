#!/usr/bin/env node
import minimist from "minimist";
import { rpsFunct } from "../lib/rpsls.js"

console.log("\n------------- ROCK, PAPER, SCISSORS! -------------\n");

const args = minimist(process.argv.slice(2));

var rpslsOpts = ["lizard", "spock"];

if (args.h || args.help) {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)");
    console.log("   -h, --help      display this help message and exit");
    console.log("   -r, --rules     display the rules and exit");
    console.log("Examples: \nnode-rps        Return JSON with single player RPS result. \ne.g. {'player':'rock'}");
    console.log("   node-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("   e.g {'player':'rock','opponent':'scissors','result':'win'}\n")
    process.exit(0);
} 

if (args._[0] == null) {
    args._[0] = "null";
} 

if (args.r || args.rules || rpslsOpts.includes(args._[0].toLowerCase())) {
        console.log("Rules for Rock Paper Scissors:");
        console.log("   - Scissors CUTS Paper");
        console.log("   - Paper COVERS Rock");
        console.log("   - Rock CRUSHES Scissors\n");
        process.exit(0);
    } 

console.log("\n" + JSON.stringify(rpsFunct(args)) + "\n");






