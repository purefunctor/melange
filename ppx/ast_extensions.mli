(* Copyright (C) 2020 Authors of ReScript
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)

open Ppxlib

val handle_external : Location.t -> string -> Parsetree.expression

val handle_debugger :
  Location.t -> Parsetree.payload -> Parsetree.expression_desc

val handle_raw :
  kind:Js_raw_info.raw_kind ->
  Location.t ->
  Parsetree.payload ->
  Parsetree.expression

val handle_raw_structure :
  Location.t -> Parsetree.payload -> Parsetree.structure_item

(* module Make : sig *)
(* val local_external_apply : *)
(* Location.t -> *)
(* ?pval_attributes:Parsetree.attributes -> *)
(* pval_prim:string list -> *)
(* pval_type:Parsetree.core_type -> *)
(* ?local_module_name:string -> *)
(* ?local_fun_name:string -> *)
(* Parsetree.expression list -> *)
(* Parsetree.expression_desc *)
(* (** *)
     (* [local_module loc ~pval_prim ~pval_type args] *)
     (* generate such code *)
     (* {[ *)
       (* let module J = struct *)
          (* external unsafe_expr : pval_type = pval_prim *)
       (* end in *)
       (* J.unssafe_expr args *)
     (* ]} *)
   (* *) *)

(* val local_external_obj : *)
(* Location.t -> *)
(* ?pval_attributes:Parsetree.attributes -> *)
(* pval_prim:string list -> *)
(* pval_type:Parsetree.core_type -> *)
(* ?local_module_name:string -> *)
(* ?local_fun_name:string -> *)
(* (string * Parsetree.expression) list -> *)
(* (* [ (label, exp )]*) *)
(* Parsetree.expression_desc *)

(* val local_extern_cont_to_obj : *)
(* Location.t -> *)
(* ?pval_attributes:Parsetree.attributes -> *)
(* pval_prim:string list -> *)
(* pval_type:Parsetree.core_type -> *)
(* ?local_module_name:string -> *)
(* ?local_fun_name:string -> *)
(* (Parsetree.expression -> Parsetree.expression) -> *)
(* Parsetree.expression_desc *)

(* type label_exprs = (Longident.t Asttypes.loc * Parsetree.expression) list *)

(* val record_as_js_object : *)
(* Location.t -> label_exprs -> Parsetree.expression_desc *)
(* end *)