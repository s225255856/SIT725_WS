const chai = require("chai");
const request = require("request");
const express = require('express');
const Project = require("../models/cardModel");
const cardService = require("../services/cardService");

const { expect } = chai;

describe("Website API", function () {
  const baseUrl = "http://localhost:3000";

    
    it("returns status 200 to check if api works", function(done) {
        request(baseUrl, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
});

describe("Card Service", () => {
  before(async () => {
      mongoose.connect('mongodb://localhost:27017/testDB', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      
      await Project.deleteMany(); // Clear test data before starting
  });

  after(async () => {
      await mongoose.connection.close();
  });

  // Test 1: Should return an empty array when no projects exist
  it("should return an empty array when no projects are found", async () => {
      const result = await cardService.getAllCard();
      expect(result).to.be.an("array").that.is.empty;
  });

  // Test 2: Should return projects when they exist
  it("should return an array of projects", async () => {
      await Project.create({ title: "Test Card", description: "Example data" });

      const result = await cardService.getAllCard();
      expect(result).to.be.an("array");
      expect(result).to.have.length(1);
      expect(result[0]).to.have.property("title", "Test Card");
  });

  // Test 3: Should handle database errors gracefully
  it("should throw an error if database connection is lost", async () => {
      await mongoose.connection.close(); //simulate DB failure

      try {
          await cardService.getAllCard();
          throw new Error("Expected function to throw an error");
      } catch (error) {
          expect(error).to.be.an("error");
      } finally {
          await mongoose.connect('mongodb://localhost:27017/testDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); //reconnect
      }
  });

  // Test 4: Should check returned data structure
  it("should return objects with required properties", async () => {
      const result = await cardService.getAllCard();
      expect(result[0]).to.have.property("title");
      expect(result[0]).to.have.property("description");
  });
});