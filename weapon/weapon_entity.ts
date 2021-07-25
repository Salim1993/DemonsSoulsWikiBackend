import { Column, Entity, PrimaryColumn } from "typeorm";

//https://github.com/typeorm/typeorm/issues/1267
@Entity({name: 'meelee_weapons'})
export class Weapon {

    @PrimaryColumn()
    name: string;

    @Column({name:"weapon_type"})
    weaponType: string;

    @Column({name:"phys_atk"})
    physAtk: number;

    @Column({name:"phys_def"})
    physDef: number;

    @Column({name:"mag_atk"})
    magAtk: number;

    @Column({name:"mag_def"})
    magDef: number;

    @Column({name:"fire_atk"})
    fireAtk: number;

    @Column({name:"fire_def"})
    fireDef: number;

    @Column({name:"aux_damage"})
    auxDamage: number;

    @Column({name:"aux_type"})
    auxType: string;

    @Column({name:"types_string"})
    typesString: string;

    @Column({name:"str_req"})
    strReq: number;

    @Column({name:"str_bonus"})
    strBonus: string;

    @Column({name:"dex_req"})
    dexReq: number;

    @Column({name:"dex_bonus"})
    dexBonus: string;

    @Column({name:"faith_req"})
    faithReq: number;

    @Column({name:"faith_bonus"})
    faithBonus: string;

    @Column({name:"critical_damage"})
    criticalDamage: number;

    @Column({name:"guard_break_reduction"})
    guardBreakReduction: number;

    @Column()
    weight: number;

    @Column()
    durability: number;

    @Column()
    location: string;
}
