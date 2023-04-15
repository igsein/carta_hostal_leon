import { useState, useEffect } from "react";
import carta from "./carta.json";
import alergenos from "./alergenos/alerjenos.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [typesProds, setTypesProds] = useState("");

  console.log(alergenos);

  function addZeroes(num) {
    return num.toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: 2,
    });
  }

  const capitalizeWord = (text) => {
    const lower = text.toLowerCase();

    return capitalizeFirstLetter(lower);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const tipos = carta.map((typ) => typ.TYPE);

    let uniqueChars = [...new Set(tipos)];

    setTypesProds(uniqueChars);
  }, []);

  const deleteDuplicates = (array) => {
    var uniq = {};
    var arrFiltered = array
      .filter((obj) => !uniq[obj.name] && (uniq[obj.name] = true))
      .filter((obj) => obj.name !== "");
    return arrFiltered;
  };

  const searchAlergenos = (ids) => {
    if (ids) {
      const arrayAlergenos = [];

      const allids = ids;

      for (let index = 0; index < allids.length; index++) {
        const element = allids[index];

        const filtrado = alergenos.filter((alerg) => alerg.ID === element)[0];
        arrayAlergenos.push(filtrado);
      }

      console.log(arrayAlergenos);

      return arrayAlergenos.map((alerg) => {
        return <img className="alergenos-icon" src={alerg.PIC} />;
      });
    }
  };
  return (
    <div>
      <table>
        {typesProds
          ? typesProds.map((prods, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>
                      <h1>{prods}</h1>
                    </td>
                  </tr>
                  {carta
                    ? carta
                        .filter((cart) => cart.TYPE === prods)
                        .map((prod, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                {capitalizeWord(prod.NAME)}
                                {searchAlergenos(prod.ALERG)}
                              </td>
                              <td></td>
                              <td className="price">
                                {addZeroes(prod.PRICE)}
                                {prod.PRICE ? "€" : ""}
                              </td>
                            </tr>
                          );
                        })
                    : ""}
                </>
              );
            })
          : ""}
      </table>
    </div>
  );
}

export default App;
