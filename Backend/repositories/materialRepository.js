import RepositorioBase from "./repositorioBase.js";
import Materiales from "../models/materiales.js";

class MaterialRepository extends RepositorioBase {
	constructor() {
		super(Materiales);
	}
}

export default MaterialRepository;
