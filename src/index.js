import InterfaceComponent from './interface.vue';

export default {
	id: 'field-mapping-snake-case-converter',
	name: 'Field Mapping SnakeCase Converter',
	icon: 'Polyline',
	description: 'This Interface converts input to snake case either from other field value or direct input.',
	component: InterfaceComponent,
	options: 	 [
		{
		field: "relatedField",
		name: "Related Field Name",
		placeholder : "Enter related column name to receive value and transform it.",
		type: "string",
		meta: {
		  field: "width",
		  width: "half",
		  type: "string",
		  interface: "input",
		},
	  }
	],
	types: ['string'],
};
